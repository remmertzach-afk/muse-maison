import { type SchemaTypeDefinition } from 'sanity'

// 1. 定义分类结构 (Category)
const category = {
  name: 'category',
  type: 'document',
  title: 'Categories',
  fields: [
    { name: 'name_en', type: 'string', title: 'Category Name (EN)' },
    { name: 'name_fr', type: 'string', title: 'Nom de la Catégorie (FR)' },
  ]
}

// 2. 定义产品结构 (Product)
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
    { 
      name: 'category', 
      type: 'reference', 
      title: 'Category',
      to: [{ type: 'category' }] // 建立产品与分类的连接
    },
  ]
}

// 3. 导出所有类型 (保留你原本已有的 blog 相关类型以防报错)
import { blockContentType } from './blockContentType'
import { categoryType } from './categoryType'
import { postType } from './postType'
import { authorType } from './authorType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType, category, product],
}