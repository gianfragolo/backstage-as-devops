locals {
  rgName  = "doh22-backstage"
  appName = "doh22-backstage-dockerapp"
  tags = {
    "doh22.provisioner" = "terraform"
    "doh22.owner"       = "luca.milan@gmail.com"
  }
}