output "namespace" {
  value = kubernetes_namespace.pet_ns.metadata[0].name
}