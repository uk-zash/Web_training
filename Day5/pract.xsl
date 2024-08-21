<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
    <html>
        <head>
            <title>My First XSLT</title>
        </head>
        <table border="1">
            <tr>
                <th>Title</th>
                <th>Name</th>
            </tr>
            <xsl:for-each select="catalog/cd">
                <tr>
                    <td><xsl:value-of select="title"/></td>
                    <td><xsl:value-of select="artist"/></td>
                </tr>
            </xsl:for-each>
        </table>
    </html>
    </xsl:template>

</xsl:stylesheet>