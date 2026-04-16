import { type SchemaTypeDefinition } from 'sanity'

import { blockContentType } from './blockContentType'
import { categoryType } from './categoryType'
import { postType } from './postType'
import { authorType } from './authorType'

// 这里的 product 定义就是 Muse Maison 的产品结构
const product = {
  name: 'product',
  type: 'document',
  title: 'Products',
  fields: [
    { name: 'name_en', type: 'string', title: 'Product Name (EN)' },
    { name: 'name_fr', type: 'string', title: 'Nom du Produit (FR)' },
    { name: 'sku', type: 'string', title: 'SKU' },
    { name: 'price', type: 'number', title: 'Price' },
    { name: 'image', type: 'image', title: 'Product Image', options: { hotspot: true } },
    { name: 'category', type: 'string', title: 'Category' },
  ]
}

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType, product],
}