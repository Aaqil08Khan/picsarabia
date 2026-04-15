$wikiUrls = @(
'https://en.wikipedia.org/wiki/Saudi_Aramco',
'https://en.wikipedia.org/wiki/SABIC',
'https://en.wikipedia.org/wiki/Saudi_Electricity_Company',
'https://en.wikipedia.org/wiki/Sadara',
'https://en.wikipedia.org/wiki/Ma%27aden',
'https://en.wikipedia.org/wiki/National_Water_Company_(Saudi_Arabia)',
'https://en.wikipedia.org/wiki/KAUST_Oil',
'https://en.wikipedia.org/wiki/SATORP',
'https://en.wikipedia.org/wiki/Yasref',
'https://en.wikipedia.org/wiki/NOMAC',
'https://en.wikipedia.org/wiki/Nesma',
'https://en.wikipedia.org/wiki/Ma%27aden_Smelting_Company',
'https://en.wikipedia.org/wiki/Saipem',
'https://en.wikipedia.org/wiki/Sipchem',
'https://en.wikipedia.org/wiki/Larsen_%26_Toubro',
'https://en.wikipedia.org/wiki/Tasnee'
)

$logos = @()

foreach ($wiki in $wikiUrls) {
 try {
  $content = (Invoke-WebRequest -Uri $wiki -UseBasicParsing).Content
 } catch {
  $logos += "Page not found"
  continue
 }
 $match = $content | Select-String -Pattern 'infobox-image.*src="//upload\.wikimedia\.org([^"]*(\.svg|\.png))"' | Select-Object -First 1
 if ($match) {
  $path = $match.Matches[0].Groups[1].Value
  if ($path -match '/thumb/') {
   $parts = $path -split '/'
   $logoUrl = "https://upload.wikimedia.org/" + $parts[1] + "/" + $parts[2] + "/" + $parts[4] + "/" + $parts[5] + "/" + $parts[6]
  } else {
   $logoUrl = "https://upload.wikimedia.org" + $path
  }
  # Prefer SVG
  if ($logoUrl -match '\.svg$') {
   $logos += $logoUrl
  } else {
   $svgUrl = $logoUrl -replace '\.png$', '.svg'
   try {
    $response = Invoke-WebRequest -Uri $svgUrl -Method Head -UseBasicParsing
    if ($response.StatusCode -eq 200 -and $response.Headers.'Content-Type' -eq 'image/svg+xml') {
     $logos += $svgUrl
    } else {
     $logos += $logoUrl
    }
   } catch {
    $logos += $logoUrl
   }
  }
 } else {
  $logos += "No logo found"
 }
}

$logos | ForEach-Object { Write-Host $_ }