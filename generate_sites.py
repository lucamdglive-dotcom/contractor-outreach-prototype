#!/usr/bin/env python3
"""
Generate 10 personalized website URLs for each business.
Each site is a unique deployment with business data injected via URL parameters.
"""

import json
import urllib.parse
from pathlib import Path

# Load business data
with open("business_data.json", "r") as f:
    businesses = json.load(f)

# Base deployment URL (will be replaced with actual Vercel domain)
BASE_URL = "https://{subdomain}.vercel.app"

# Generate sites
generated_sites = []

for idx, business in enumerate(businesses, 1):
    # Create a slug from business name
    slug = business["name"].lower().replace(" ", "-").replace("&", "and")[:20]
    subdomain = f"{slug}-{idx:02d}"
    
    # Encode business data as URL parameter
    data_param = urllib.parse.quote(json.dumps(business))
    
    # Full URL with data injection
    site_url = f"{BASE_URL.format(subdomain=subdomain)}/?data={data_param}"
    
    generated_sites.append({
        "id": idx,
        "business_name": business["name"],
        "phone": business["phone"],
        "subdomain": subdomain,
        "url": site_url,
        "data": business
    })
    
    print(f"{idx}. {business['name']}")
    print(f"   Subdomain: {subdomain}")
    print(f"   Phone: {business['phone']}")
    print(f"   Address: {business['address']}")
    print()

# Save generated sites data
with open("generated_sites.json", "w") as f:
    json.dump(generated_sites, f, indent=2)

print(f"\n✓ Generated {len(generated_sites)} sites")
print(f"✓ Saved to generated_sites.json")
print("\nNext steps:")
print("1. Deploy to Vercel")
print("2. Create subdomains for each site")
print("3. Send SMS with unique URLs to each business")
