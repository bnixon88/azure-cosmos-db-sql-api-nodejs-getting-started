// @ts-check

const config = {
  endpoint: "https://cosmos-sql-kellyspicers.documents.azure.com:443/",
  key: "nnhUtwPjjF1EKnW2ghpoqYRrKHd2oRbsAem7cxDAGkJCpPnp9lEZiTjBD915itxhPTDm32nSsVrMX7IUyh4YNw==",
  databaseId: "Tasks",
  containerId: "Items",
  partitionKey: { kind: "Hash", paths: ["/category"] }
};

module.exports = config;
