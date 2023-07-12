import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
    "skVQebqYXs59jYLTfsygoLI1SjCKAlXrzDm69LnDT8WYVXKBZGMUwLAnLfWvD51cYWZBfY7mqt5oTVz91eDkbD14MzVBLYp4vL8cwUDuS5kuaMZSbH35oGzuVjSj2xJU74qnnDNkMdy3S5FXJH0Or1H7okibZlEnQtBIaDncAXoifVGNNDxM",
})
