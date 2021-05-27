// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import client from './client'
import invoice from './client_parts/invoice'
import contract from './client_parts/contract'
import digitalAsset from './client_parts/digitalAsset'

import brand from './client_parts/brand'
import color from './client_parts/brand_parts/color'
import font from './client_parts/brand_parts/font'
import fontVariation from './client_parts/brand_parts/fontVariation'
import logo from './client_parts/brand_parts/logo'
import singleLogo from './client_parts/brand_parts/singleLogo'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    client,
    invoice,
    contract,
    digitalAsset,
    brand,
    color,
    font,
    fontVariation,
    logo,
    singleLogo
  ]),
})
