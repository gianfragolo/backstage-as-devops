terraform {
  required_version = "1.2.7"
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~>3.17.0"
    }
  }
  backend "azurerm" {
    storage_account_name = "tfstate560412721"
    container_name       = "tfstate"
    key                  = "terraform.tfstate"
  }
}

provider "azurerm" {
  features {}
}

# Create a new Resource Group
resource "azurerm_resource_group" "group" {
  name     = local.rgName
  location = var.location
  tags     = local.tags
}

# Create an App Service Plan with Linux
resource "azurerm_service_plan" "appserviceplan" {
  name                = "${azurerm_resource_group.group.name}-plan"
  location            = azurerm_resource_group.group.location
  resource_group_name = azurerm_resource_group.group.name
  os_type             = "Linux"
  sku_name            = "F1"
  tags                = local.tags
}

resource "azurerm_linux_web_app" "dockerapp" {
  name                = local.appName
  location            = azurerm_resource_group.group.location
  resource_group_name = azurerm_resource_group.group.name
  service_plan_id     = azurerm_service_plan.appserviceplan.id
  https_only          = true
  tags                = local.tags

  # Do not attach Storage by default
  app_settings = {
    WEBSITES_ENABLE_APP_SERVICE_STORAGE = false
    APP_CONFIG_app_title                = "Backstage IMAGE:TAG:${var.IMAGE_TAG}"
    APP_CONFIG_app_baseUrl              = "https://${local.appName}.azurewebsites.net:443"
    APP_CONFIG_backend_listen_port      = "7007"
    APP_CONFIG_backend_baseUrl          = "https://${local.appName}.azurewebsites.net"
    APP_CONFIG_backend_cors_origin      = "https://${local.appName}.azurewebsites.net"
    PORT                                = "80"
    WEBSITES_PORT                       = "7007"

    GITHUB_TOKEN              = var.GITHUB_TOKEN
    AUTH_GITHUB_CLIENT_ID     = var.AUTH_GITHUB_CLIENT_ID
    AUTH_GITHUB_CLIENT_SECRET = var.AUTH_GITHUB_CLIENT_SECRET

    # Settings for private Container 
    DOCKER_REGISTRY_SERVER_URL      = "https://docker.io"
    DOCKER_REGISTRY_SERVER_USERNAME = var.DOCKERHUB_USERNAME
    DOCKER_REGISTRY_SERVER_PASSWORD = var.DOCKERHUB_TOKEN
  }

  site_config {
    always_on = "false"
    application_stack {
      docker_image     = "docker.io/lucamilan/backstage"
      docker_image_tag = var.IMAGE_TAG
    }
  }

  identity {
    type = "SystemAssigned"
  }
}
