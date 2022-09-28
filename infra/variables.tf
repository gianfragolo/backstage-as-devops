variable "location" {
  type        = string
  default     = "westeurope"
  description = "Azure Region"
}

variable "AUTH_GITHUB_CLIENT_ID" {
  description = "Client id of the Oauth GitHub app"
  type        = string
}

variable "AUTH_GITHUB_CLIENT_SECRET" {
  description = "GitHub Oauth app client secret"
  sensitive   = true
  type        = string
}

variable "GITHUB_TOKEN" {
  description = "GitHub PAT"
  sensitive   = true
  type        = string
}

variable "IMAGE_TAG" {
  description = "Image Tag to deploy"
  sensitive   = false
  default     = "latest"
  type        = string
}

variable "DOCKERHUB_USERNAME" {
  description = "Docker User"
  sensitive   = false
  default     = "lucamilan"
  type        = string
}

variable "DOCKERHUB_TOKEN" {
  description = "Docker secret"
  sensitive   = true
  type        = string
}
