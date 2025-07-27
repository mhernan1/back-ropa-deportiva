import type { Attribute, Schema } from '@strapi/strapi';

export interface ProductOrderitems extends Schema.Component {
  collectionName: 'components_product_orderitems';
  info: {
    description: '';
    displayName: 'Orderitems';
  };
  attributes: {
    price: Attribute.Decimal & Attribute.Required;
    products: Attribute.Relation<
      'product.orderitems',
      'oneToMany',
      'api::product.product'
    >;
    quantity: Attribute.Integer & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'product.orderitems': ProductOrderitems;
    }
  }
}
