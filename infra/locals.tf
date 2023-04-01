locals {
  rgName  = "rg-backstage"
  appName = "gianfragolo-backstage"
  tags = {
    "backstage.provisioner" = "terraform"
    "backstage.owner"       = "luca.milan@gmail.com"
  }
}