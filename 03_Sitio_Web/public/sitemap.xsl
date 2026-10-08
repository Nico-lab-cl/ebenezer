<?xml version="1.0" encoding="UTF-8"?>
<!-- Presentación del sitemap en el navegador. Google lee el XML y no usa este archivo. -->
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="es">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="robots" content="noindex"/>
        <title>Mapa del sitio · EBENEZER Automotora</title>
        <style>
          body{margin:0;background:#14171b;color:#e8eaed;font:15px/1.5 system-ui,-apple-system,Segoe UI,Roboto,sans-serif}
          main{max-width:960px;margin:0 auto;padding:40px 16px}
          h1{font-style:italic;font-weight:800;font-size:28px;margin:0 0 6px}
          p{color:#9aa1a9;margin:0 0 24px}
          table{width:100%;border-collapse:collapse;background:#1d2126}
          th,td{text-align:left;padding:12px 14px;border-bottom:1px solid #2b3036}
          th{font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#f26b21}
          a{color:#fff;text-decoration:none;word-break:break-all}
          a:hover{color:#f26b21}
          td.n{width:40px;color:#6b737c}
        </style>
      </head>
      <body>
        <main>
          <h1>Mapa del sitio</h1>
          <xsl:choose>
            <xsl:when test="s:sitemapindex">
              <p>Índice de sitemaps de automotoraebenezer.cl. Este es el archivo que se envía a Google Search Console.</p>
              <table>
                <tr><th>#</th><th>Sitemap</th></tr>
                <xsl:for-each select="s:sitemapindex/s:sitemap">
                  <tr><td class="n"><xsl:value-of select="position()"/></td><td><a href="{s:loc}"><xsl:value-of select="s:loc"/></a></td></tr>
                </xsl:for-each>
              </table>
            </xsl:when>
            <xsl:otherwise>
              <p><xsl:value-of select="count(s:urlset/s:url)"/> páginas indexables de automotoraebenezer.cl.</p>
              <table>
                <tr><th>#</th><th>Página</th></tr>
                <xsl:for-each select="s:urlset/s:url">
                  <tr><td class="n"><xsl:value-of select="position()"/></td><td><a href="{s:loc}"><xsl:value-of select="s:loc"/></a></td></tr>
                </xsl:for-each>
              </table>
            </xsl:otherwise>
          </xsl:choose>
        </main>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
