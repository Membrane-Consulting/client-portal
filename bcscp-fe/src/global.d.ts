/// <reference types="@sveltejs/kit" />
/// <reference types="svelte" />
/// <reference types="vite/client" />

type User = {
  id: string,
  aud: string,
  role: string,
  email: string,
  confirmed_at: string,
  last_sign_in_at: string,
  app_metadata: object
}

type Session = {
  access_token: string,
token_type: string,
expires_in: number,
refresh_token: string,
user: User,
user_metadata: any,
created_at: string,
updated_at: string,
expires_at: number
}

type UserSanityData = {
  businessName: string, 
  email: string, 
  ownerName: string, 
  phone: string
}