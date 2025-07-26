import type { Attribute, Schema } from '@strapi/strapi';

export interface ProductOrderitems extends Schema.Component {
  collectionName: 'components_product_orderitems';
  info: {
    displayName: 'Orderitems';
  };
  attributes: {
    price: Attribute.Decimal & Attribute.Required;
    product: Attribute.Relation<
      'product.orderitems',
      'oneToOne',
      'api::product.product'
    >;
    quality: Attribute.Integer & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'product.orderitems': ProductOrderitems;
    }
  }
}
