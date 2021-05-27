export default {
  name: 'client',
  title: 'Clients',
  type: 'document',
  fields: [
    {
      name: 'businessName',
      title: 'Business Name',
      type: 'string',
    },
    {
      name: 'brandAssets',
      title: 'Brand Assets',
      type: 'brand'
    },
    {
      name: 'ownerName',
      title: 'Owner Name',
      type: 'string',
    },
    {
      name: 'supa_id',
      title: 'Supabase ID',
      type: 'string',
    },
    {
      name: 'netlify_key',
      title: 'Netlify API Key',
      type: 'string',
    },
    {
      name: 'netlify_token',
      title: 'Netlify Secret Access Token',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email Address',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    },
    {
      name: 'invoices',
      title: 'Invoices',
      type: 'array',
      of: [{
        type: 'invoice',
      }],
    },
    {
      name: 'contracts',
      title: 'Contracts',
      type: 'array',
      of: [{
        type: 'contract',
      }],
    },
    {
      name: 'digitalAssets',
      title: 'Digital Assets',
      type: 'array',
      of: [{
        type: 'digitalAsset',
      }],
    },
  ],
}