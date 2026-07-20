# KI.mit.UNS – lokaler Webseiten-Erstentwurf

Dieser Ordner enthält den ersten funktionsfähigen, **lokalen** Entwurf der Team-Webseite „KI.mit.UNS“, erstellt auf Basis von `Masterprompt_KI-mit-UNS_Claude-Code.md`. Die Seite ist **nicht veröffentlicht** und **nicht deployt**.

## 1. Lokale Vorschau starten

Kein Build-Prozess nötig. Zwei Möglichkeiten:

- `index.html` direkt im Browser öffnen, oder
- einen einfachen lokalen Server starten, z. B. mit VS Code „Live Server“ oder `npx serve .` im Projektordner, und die angezeigte lokale Adresse öffnen.

## 2. Technische Grundlage

- Semantisches HTML5, zentrales CSS (`assets/css/tokens.css`, `assets/css/styles.css`) und Vanilla JavaScript (`assets/js/main.js`)
- Keine Frameworks, keine externen Bibliotheken, kein Build-Schritt
- Keine externen Dienste: keine Google Fonts, keine Google Maps, kein Tracking, keine Analyse- oder Marketing-Cookies, keine eingebetteten Social-Media-Feeds
- 18 HTML-Seiten: 12 Hauptseiten + 6 individuelle Teamprofile unter `team/`

## 3. Erstellte / geänderte Dateien

```
index.html, ueber-uns.html, team.html, kompetenzen.html, projekte.html,
faq.html, kundenfeedback.html, blog.html, downloads.html, kontakt.html,
impressum.html, datenschutz.html
team/bianca.html, team/carola.html, team/cindy.html, team/claudia.html,
team/elbert.html, team/brix.html
assets/css/tokens.css, assets/css/styles.css
assets/js/main.js
assets/images/logo.svg
README.md
```

Vorhandene Projektdateien (Miro-PDF, ODT-Dateien, Promo-SVGs) wurden nur gelesen, nicht verändert.

## 4. Wichtiger Befund: Farbcode-Korrektur

Der Masterprompt vermutete für „Meeresblau“ den Hex-Code `#003572`. Sowohl das handschriftliche Foto in `Designfarben KImitUNS.odt` als auch die tatsächlich verwendeten Hex-Werte in `Promo INSTA SLIDE KI.mit.UNS/1.svg` und `2.svg` zeigen jedoch übereinstimmend **`#00357A`**. Dieser Wert wurde als Design-Token übernommen. **Vor Veröffentlichung trotzdem final mit der offiziellen Logo-Quelldatei abgleichen.**

Bestätigt unverändert: Intensivorange `#F6612D`, Eisblau `#99C5FF`.

## 5. Logo

In `Promo INSTA SLIDE KI.mit.UNS/1.svg` und `2.svg` existiert bereits ein Vektor-Logo (abgerundetes Navy-Quadrat mit aufsteigender Punktlinie plus Wortmarke). Dieses Motiv wurde als eigenständige, saubere SVG-Datei unter `assets/images/logo.svg` nachgebaut und ist auf jeder Seite inline im Header/Footer eingebunden. **Vor Veröffentlichung mit der offiziellen, finalen Logodatei (SVG/PNG) der Marke abgleichen und ggf. ersetzen.**

## 6. Vorschläge für die Hero-Hauptüberschrift

Verwendet im Entwurf: **„KI, die im Arbeitsalltag wirklich ankommt.“**

Weitere Vorschläge zur Auswahl durch das Team:

1. „KI, die im Arbeitsalltag wirklich ankommt.“ *(aktuell verwendet)*
2. „Verständliche KI für echte Herausforderungen.“
3. „Sechs Perspektiven. Eine KI, die zu Ihnen passt.“
4. „KI, erklärt von Menschen, die Ihren Alltag kennen.“
5. „Weniger Überforderung, mehr Wirkung – mit KI.“

## 7. Tests / Qualitätskontrolle

Manuell geprüft:

- Alle internen Links zwischen den 18 Seiten (Hauptnavigation, Footer, Team-Unterseiten-Navigation) auf Konsistenz der relativen Pfade
- Mobiles Menü: `aria-expanded`, `hidden`-Steuerung, Escape-Taste, Verhalten beim Wechsel zwischen Mobil-/Desktop-Breite
- FAQ-Akkordeon: Tastaturbedienbarkeit, `aria-controls`/`aria-expanded`
- Kontaktformular: Client-seitige Validierung (Pflichtfelder, E-Mail-Format, Pflicht-Checkbox), keine echte Datenübertragung
- Kein externer Netzwerkaufruf im Quellcode (keine Google Fonts/Maps/Analytics-Einbindungen)
- Responsives Verhalten der Layout-Raster über CSS Grid/Flexbox mit `clamp()`-Schriftgrößen

Nicht automatisiert getestet (im Rahmen dieses Erstentwurfs keine Testumgebung/CI vorhanden): automatisierte Screenreader- und Cross-Browser-Tests. Empfehlung vor Veröffentlichung: manuelle Prüfung mit einem Screenreader (z. B. NVDA) und in mindestens zwei Browsern.

## 8. Bleiben Platzhalter / redaktionelle Entwürfe

- Finale Hauptüberschrift der Startseite (siehe Vorschläge oben)
- Finale Akzentfarbpalette / Bestätigung der drei Hex-Codes anhand der Original-Logoquelle
- Vollständige, bestätigte Namen aller sechs Teammitglieder (inkl. Klärung „Brix“ vs. „Tamara Brix“)
- Vollständige/korrekte E-Mail-Adresse von Claudia
- Fotos von Bianca, Claudia (Shooting laut Planung am 24.07.2026) und Brix
- Separate, freigegebene Porträtdateien von Carola, Cindy und Elbert
- Offizielles Logo als finale SVG/PNG-Datei
- Standorte aller Teammitglieder für die Teamkarte (bestätigt bisher nur: Elbert – Erkelenz, Deutschland)
- Offizielle Instagram- und WhatsApp-Ziele
- Echte Kundenstimmen inkl. Veröffentlichungsfreigaben (`kundenfeedback.html` zeigt bewusst nur ein Konzept)
- Vollständige Projektbeschreibungen und -ergebnisse (`projekte.html`)
- Blogbeiträge und Downloads
- Anbieterangaben für `impressum.html`
- Vollständige, rechtlich geprüfte Angaben für `datenschutz.html`
- Technische Verarbeitung/Backend für das Kontaktformular

Alle diese Stellen sind im Code mit `TODO`-Kommentaren beziehungsweise sichtbar mit „[INHALT NOCH ERGÄNZEN]“ oder als „(zu bestätigen)“ gekennzeichnet.

## 9. Persönliche Kontaktdaten – wichtiger Hinweis

Auf den Teamprofilseiten (`team/*.html`) sind die im Miro-Board hinterlegten E-Mail-Adressen und Telefonnummern **nur als lokale Vorschau** sichtbar. **Vor jeder Veröffentlichung ist die ausdrückliche Freigabe jedes einzelnen Teammitglieds für die Nutzung seiner persönlichen Kontaktdaten auf der öffentlichen Webseite einzuholen.** Ohne diese Freigabe dürfen die Daten nicht online gehen.

## 10. So werden künftig Inhalte ergänzt

- **Teammitglieder:** Neue oder aktualisierte Profile werden direkt in der jeweiligen Datei unter `team/` gepflegt; die Kurzvorschau auf `index.html` und `team.html` muss manuell mitgepflegt werden, da keine zentrale Datenbank/kein Build-Schritt existiert.
- **Leistungen/Kompetenzen:** Kategorien in `kompetenzen.html` sowie die Kartenübersicht in `index.html` (Abschnitt „Leistungen & Services“) anpassen.
- **Projekte:** Neue `<article class="project-card">`-Blöcke in `projekte.html` ergänzen, sobald echte Ergebnisse vorliegen.
- **Blog/Downloads:** Der `.placeholder-box`-Block in `blog.html`/`downloads.html` wird durch echte Beitrags-/Download-Karten (analog zu `.card`/`.project-card`) ersetzt.
- **Design:** Alle Farben, Abstände und Schriftgrößen sind zentral in `assets/css/tokens.css` als CSS Custom Properties gepflegt.

## 11. Offene Punkte für Claudia und das Team

Siehe den Abschnitt „Offene Punkte für Claudia und das Team“ am Ende von `Masterprompt_KI-mit-UNS_Claude-Code.md` – dieser bleibt vollständig gültig und wurde durch diesen Entwurf nicht abschließend geklärt, nur strukturell vorbereitet.
