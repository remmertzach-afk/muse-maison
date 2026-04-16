import { type SchemaTypeDefinition } from 'sanity'

// 1. 定义分类结构
const category = {
  name: 'category',
  type: 'document',
  title: 'Categories',
  fields: [
    { name: 'name_en', type: 'string', title: 'Category Name (EN)' },
    { name: 'name_fr', type: 'string', title: 'Nom de la Catégorie (FR)' },
  ]
}

// 2. 定义产品结构
const product = {
  name: 'product',
  type: 'document',
  title: 'Products',
  fields: [
    { name: 'name_en', type: 'string', title: 'Product Name (EN)' },
    { name: 'name_fr', type: 'string', title: 'Nom du Produit (FR)' },
    { name: 'sku', type: 'string', title: 'SKU' },
    { name: 'image', type: 'image', title: 'Product Image', options: { hotspot: true } },
    { 
      name: 'category', 
      type: 'reference', 
      title: 'Category',
      to: [{ type: 'category' }] 
    },
  ]
}

// 3. 导出，只包含你目前最需要的这两个
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [category, product],
}