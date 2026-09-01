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
- Vollständige/korrekte E-Mail-Adresse von Claudia
- Fotos von Bianca, Claudia (Shooting laut Planung am 24.07.2026), Brix – sowie Carola, Cindy und Elbert: Im Projektordner liegt weiterhin keine separate, freigegebene Porträtdatei vor (auch nicht für Cindy, obwohl im Teamfeedback danach gefragt wurde)
- Offizielles Logo als finale SVG/PNG-Datei (im Projektordner weiterhin keine eigenständige Originaldatei auffindbar, nur das rekonstruierte Motiv aus den Promo-SVGs)
- Standorte aller Teammitglieder für die Teamkarte (bestätigt bisher nur: Elbert – Erkelenz, Deutschland; für die übrigen fünf liegen jetzt PLZ-Angaben vor, siehe Teamprofile)
- Offizielle Instagram- und WhatsApp-Ziele (Footer-Buttons sind seit der Optimierungsrunde vorbereitet, aber bewusst nicht verlinkt)
- Echte Kundenstimmen inkl. Veröffentlichungsfreigaben (`kundenfeedback.html` zeigt bewusst nur ein Konzept)
- Vollständige Projektbeschreibungen und -ergebnisse (`projekte.html`, inkl. der beiden neuen Projekte „EU AI Act & DSGVO Check“ und „Checkliste: KI im Unternehmen“)
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

Siehe den Abschnitt „Offene Punkte für Claudia und das Team“ am Ende von `Masterprompt_KI-mit-UNS_Claude-Code.md`. **Update:** Die vollständigen Namen aller sechs Teammitglieder sind inzwischen bestätigt und auf der gesamten Website hinterlegt: Bianca Balkenhol, Carola Brandes, Cindy Haase, Claudia Sobotka, Elbert Valkenburg, Tamara Brix.

## 12. Optimierungsrunde nach Teamfeedback (20.08.2026)

Auf Basis von `Claude-Code-Prompt_ Website KI.mit.UNS – vollständige Optimierungsrunde nach Teamfeedback.md` wurde die bestehende Website überarbeitet, nicht neu erstellt. Wichtigste Änderungen:

- **Du-Ansprache** konsequent auf der gesamten Website umgesetzt (inkl. Formular-Fehlermeldungen in `main.js`)
- **Teamkarten neu strukturiert:** echtes 3-Spalten-Raster auf Desktop, 4 Bereiche pro Karte (Foto/Name/Rolle, Schwerpunkt max. 3 Zeilen, 2 Kompetenz-Tags, Kurztext + Button) über CSS-Subgrid auf gleicher Höhe ausgerichtet – zentrale Lösung, keine Pixelkorrekturen pro Person
- **Berufserfahrung** auf allen sechs Personenseiten als Aufzählungspunkte statt Fließtext
- **Kompetenzseite:** Icons für die 5 Leistungsbereiche ergänzt, neue Zusammenfassung „Was das Team gemeinsam mitbringt“, Instagram/SEO/GEO in Orange hervorgehoben
- **PLZ ergänzt** bei Bianca (59846), Carola (30926), Cindy (80798), Claudia (22880) und Teammitglied 6/Brix (24857); bestehende E-Mails/Telefonnummern unverändert
- **Elberts Berufsbezeichnung** um „AI Implementation Architect in Weiterbildung“ erweitert; Claudias Kennzeichnung um „in Weiterbildung“ ergänzt (Konsistenz mit ihrem eigenen Text „als angehende AI Implementation Architect“)
- **Projekt „EU AI Act & DSGVO Check“** umbenannt (Bezeichnung jetzt bestätigt, vorheriger „noch zu bestätigen“-Hinweis entfernt) und neues Projekt **„Checkliste: KI im Unternehmen“** ergänzt (beide ohne Quellmaterial im Projektordner, daher weiterhin Platzhalter-Inhalte)
- **„Woran wir arbeiten …“-Formulierung** entfernt (Startseite: „Ausgewählte Projekte“, Projektseite: „Unsere Projekte und Arbeitsbeispiele“)
- **FAQ „Welche Kosten können entstehen?“** neu beantwortet: erstes Gespräch kostenlos, weitere Kosten transparent nach Umfang
- **Kontaktbereich vereinfacht:** „Weitere Kontaktwege“ entfernt, Kontaktformular als alleiniger Fokus
- **WhatsApp/Instagram** als vorbereitete, aber nicht verlinkte Buttons in den Footer aller 18 Seiten verschoben – **OFFEN**: keine bestätigten Accounts/Links im Projektordner vorhanden
- **Footer-Claim** („Wir helfen Unternehmen …“) ist jetzt weiß und gut lesbar; vorher unbeabsichtigt grau auf Navy (zu geringer Kontrast) durch fehlerhafte Wiederverwendung der `.lead`-Klasse
- **Worttrennung:** `hyphens: none` statt `hyphens: auto` in Überschriften – `overflow-wrap: break-word` bleibt als Sicherheitsnetz gegen Überlauf bei sehr langen Wörtern erhalten
- **Markenschreibweise „KI.mit.UNS“** und Logos/Fotos geprüft: Schreibweise war bereits überall korrekt; für Logo und Fotos liegen weiterhin keine neuen Originaldateien im Projektordner vor, daher unverändert

Nicht verändert (bewusst außerhalb des Auftrags): Impressum- und Datenschutz-Texte, rechtliche Platzhalter, Formular-Backend, Preise, Namen, Domain/Hosting.

## 13. Logo- und Projekt-Update (31.08.2026)

- **Original-Logo** aus `Logo KimitUNs/Logo Ki mit Uns (2).zip` wird jetzt verbindlich verwendet (`assets/images/logo-header.svg`, `assets/images/logo-header-on-orange.svg`). Einzige technische Anpassung: das SVG-`viewBox` wurde auf den tatsächlich gezeichneten Bereich zugeschnitten (reiner Ausschnitt der leeren Fläche, keine Pfade/Farben/Proportionen verändert). Logo steht jetzt oben rechts im Header (`flex-direction: row-reverse`); im Footer sitzt es auf einem hellen Hintergrund-Patch, da das Original für helle Flächen gestaltet ist.
- **Neue Projekte ergänzt:** Grounding Page (aus `Projektbeschreibung GroundingPage.odt`), Bewerbungsmanagement (vollständig, von Elbert bestätigt), Podcast-Erstellung (Status: Konzeptphase, aus `Projektbeschreibung_Podcast_KI_mit_uns(2).docx`), Skill- & Agent-Automatisierung (Sammelkarte für Make/n8n/AI Transformation Compass, noch ohne Einzelbeschreibung).
- **Kompetenzseite neu geordnet:** „Was das Team gemeinsam mitbringt“ steht jetzt vor den Kompetenzkacheln, feste 2-Spalten-Darstellung, neue 6. Kachel „DSGVO & EU AI Act“, Instagram als Marketing-Einzelkompetenz entfernt (Social Media bleibt, in Orange).
- **Zertifikate (Punkt 37 des Auftrags):** Trotz Hinweis „Zertifikate sind da“ auf dem Sticky-Note-Board konnte im Projektordner keine Zertifikatsdatei gefunden werden – bleibt offen.
