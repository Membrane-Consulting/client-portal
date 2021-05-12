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
  phone: string,
  netlify_token: string,
  sites: Array<Site>
}

type Site = {
  id:                  string,
  state:               string,
  plan:                string,
  name:                string,
  custom_domain:       string,
  default_domain:      string,
  domain_aliases:      Array<string>,
  password:            string,
  notification_email:  string,
  url:                 string,
  ssl_url:             string,
  ssl_status:          string,
  admin_url:           string,
  screenshot_url:      string,
  created_at:          string,
  updated_at:          string,
  user_id:             string,
  session_id:          string,
  ssl:                 boolean,
  force_ssl:           boolean,
  site_created_at:     string,
  managed_dns:         boolean,
  deploy_url:          string,
  published_deploy:    PublishedDeploy,
  account_name:        string,
  account_slug:        string,
  git_provider:        string,
  deploy_hook:         string,
  capabilities:        Capabilities,
  processing_settings: ProcessingSettings,
  build_settings:      BuildSettings,
  id_domain:           string,
  default_hooks_data:  DefaultHooksData,
  build_image:         string,
  prerender:           string,
}

type BuildSettings = {
  id:               number,
  provider:         string,
  deploy_key_id:    string,
  repo_path:        string,
  repo_branch:      string,
  dir:              string,
  functions_dir:    string,
  cmd:              string,
  allowed_branches: Array<string>,
  public_repo:      boolean,
  private_logs:     boolean,
  repo_url:         string,
  env:              Env,
  installation_id:  number,
  stop_builds:      boolean,
}

type Env = {
  property1: string,
  property2: string,
}

type Capabilities = {
  property1: Property,
  property2: Property,
}

type Property = {
}

type DefaultHooksData = {
  access_token: string,
}

type ProcessingSettings = {
  skip:   boolean,
  css:    CSS,
  js:     CSS,
  images: Images,
  html:   HTML,
}

type CSS = {
  bundle: boolean,
  minify: boolean,
}

type HTML = {
  pretty_urls: boolean,
}

type Images = {
  optimize: boolean,
}

type PublishedDeploy = {
  id:                 string,
  site_id:            string,
  user_id:            string,
  build_id:           string,
  state:              string,
  name:               string,
  url:                string,
  ssl_url:            string,
  admin_url:          string,
  deploy_url:         string,
  deploy_ssl_url:     string,
  screenshot_url:     string,
  review_id:          number,
  draft:              boolean,
  required:           Array<string>,
  required_functions: Array<string>,
  error_message:      string,
  branch:             string,
  commit_ref:         string,
  commit_url:         string,
  skipped:            boolean,
  created_at:         string,
  updated_at:         string,
  published_at:       string,
  title:              string,
  context:            string,
  locked:             boolean,
  review_url:         string,
  site_capabilities:  SiteCapabilities,
  framework:          string,
}

export interface SiteCapabilities {
  large_media_enabled: boolean,
}


//utils
