-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Purchases table
create table if not exists public.purchases (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  app_slug text not null,
  paypal_transaction_id text unique not null,
  amount numeric(10,2) not null default 4.99,
  currency text not null default 'EUR',
  created_at timestamptz default now() not null
);

-- Calculations table
create table if not exists public.calculations (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  app_slug text not null,
  name text not null default 'Mi Cálculo',
  inputs jsonb not null default '{}',
  outputs jsonb not null default '{}',
  created_at timestamptz default now() not null
);

-- RLS Policies
alter table public.purchases enable row level security;
alter table public.calculations enable row level security;

-- Purchases: users can only see their own
create policy "Users can view own purchases" on public.purchases
  for select using (auth.uid() = user_id);

create policy "Service role can insert purchases" on public.purchases
  for insert with check (true);

-- Calculations: users can CRUD their own
create policy "Users can view own calculations" on public.calculations
  for select using (auth.uid() = user_id);

create policy "Users can insert own calculations" on public.calculations
  for insert with check (auth.uid() = user_id);

create policy "Users can update own calculations" on public.calculations
  for update using (auth.uid() = user_id);

create policy "Users can delete own calculations" on public.calculations
  for delete using (auth.uid() = user_id);

-- Indexes
create index if not exists purchases_user_id_idx on public.purchases(user_id);
create index if not exists purchases_app_slug_idx on public.purchases(app_slug);
create index if not exists calculations_user_id_idx on public.calculations(user_id);
create index if not exists calculations_app_slug_idx on public.calculations(app_slug);
