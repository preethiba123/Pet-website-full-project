terraform {
  required_providers {
    kubernetes = {
      source  = "hashicorp/kubernetes"
      version = "~> 2.0"
    }
  }
}

provider "kubernetes" {
  config_path = var.kubeconfig_path
}

# Example: create a namespace for the application
resource "kubernetes_namespace" "pet_ns" {
  metadata {
    name = "pet-website"
  }
}

# You can also use cloud provider modules (EKS/GKE/AKS) to provision cluster and registry