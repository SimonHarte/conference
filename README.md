# Responsive Layouting - Ein Ansatz zu flexiblem Frontend

## Was bedeuted "Responsive"?

Für viele meint das Stichwort "Responsive" einfach "eine Webseite, die auf jedem Device gut aussieht".
Das ist meiner Meinung nach jedoch nur halbwahr, denn was wir mit einer responsive Website eigentlich erreichen wollen, 
ist für jedes Endgerät (und damit sind nicht einfach Smartphone, Tablet & Desktop gemeint) den selben Inhalt 
auszuliefern, ansprechend zu präsentieren und in jedem Anwendungsfall gleichermassen Zugänglich zu machen.

Mit dem falschen Ansatz fängt man an, über die Viewports hinweg hier Elemente auszublenden und dort Duplikate wieder 
einzublenden. Der grösste Fehler in responsive Webentwicklung ist meiner Meinung nach duplizierter Inhalt, 
denn in praktisch jedem Fall lässt sich das auf ein inkonsistentes Konzept zurückführen - früher oder später 
generiert das Mehraufwand und vor allem Kopfschmerzen beim Frontend Engineer. Unsere Aufgabe ist es deshalb, 
schon in dieser Phase auf unschlüssige Layout Changes hinzuweisen und diese mit dem Konzepter zu überarbeiten. Das 
Konzept wird automatisch besser und die Arbeit im Frontend einfacher und effizienter - das Endergebnis überzeugender.

## Mobile First - aber wirklich

Eigentlich stört schon der Begriff "Mobile" hier, denn mobil ist heutzutage die Mehrheit von Endgeräten, 
zudem impliziert es auch gewisse Features wie z.B. Touchfähigkeit. "Small Screen" ist treffender, 
weil es konzeptuell zuerst mal um die Anordnung der Elemente im "kleinsten zu erwartenden" Screen geht.

Wenn wir "Mobile First" machen, schauen wir uns den kleinsten vom Design gegebenen Screen an und strukturieren das 
HTML dementsprechend - während wir ein Auge auf eine sinnvolle Seitenstruktur halten. Wenn wir einen 
kompletten Bruch dieser Struktur in einem anderen Screen entdecken, muss das Layout überdacht werden (und zwar in den
 grösseren Viewports).

Ist die Struktur gegeben, erstellen wir die Viewport abhängigen Layouts mit CSS. Falls es so aussieht, 
dass irgendwo Inhalt dupliziert oder mit Javascript verschoben werden müsste, stimmt ganz einfach etwas mit dem Konzept 
noch nicht oder es gibt eine einfachere CSS Lösung.

### Schone die Hardware

Ein zentraler Punkt beim Mobile First ist die Effizienz, sie bezieht sich vor allem auf die 
Ladegeschwindigkeit und den Stromverbrauch der Webseite. Diese Punkte können mit zwei Stichworten behandelt 
werden: **tiny** und **CSS**. Gemeint ist hier zum einen CSS statt Javascript zu verwenden wenn immer möglich (und es
 ist öfters möglich als man vielleicht denkt) und wenn Javascript genutzt wird, auf die möglichst kleinste Library 
 zurückzugreifen. Ein Beispiel für "tiny" Javascript wäre zum Beispiel die Plugins von Twitter Bootstrap statt jQuery
  UI zu verwenden. Diese sind zum einen kleiner in der Datenmenge und nutzen meist CSS Animationen statt Javascript.

## Think Content, not Devices

Wie schon früher erklärt, sollte es beim Entwickeln einer responsive Site nicht um die Endgeräte, 
sondern den Inhalt gehen. Zu einem grossen Teil müssen wir uns hier auf den Designer verlassen, 
er wählt Typographie Strukturen und entsprechend eine Aufteilung des Inhalts.

Es macht Sinn, die Breakpoints in einem Projekt zusammen mit dem Designer zu besprechen und ihn wiederum auch zu 
Challengen. Wie sieht ein gegebener Inhalt in einem für diesen Viewport grösstmöglichen Container aus? Was passiert im 
kleinstmöglichen Container? bei einer solchen Diskussion schon von "Small", "Medium" und "Large" Screens zu sprechen 
hilft, von dem üblichen Device-Denken wegzukommen und die Breakpoints wirklich Inhaltsbezogen zu definieren. Wird es 
ein Dreispalter in Tablet-Landscape oder bleibt es über Tablet Grössen immer ein Zweispalter? Unwichtig wenn es nur 
darum geht, dass der Content immer gut dargestellt wird! Das relevante Stichwort hier ist Line Length, 
nicht Device Verhalten. [Readability](http://baymard.com/blog/line-length-readability)

### EM based Queries

Der wichtigste Punkt beim Aufsetzen der Breakpoints im Frontend ist nun, EM anstatt Pixel für die Angaben zu nutzen. 
Auf den ersten Blick ändert sich rein gar nichts. Wenn man die korrekten EM Werte nimmt, 
bleiben die Breakpoints an der gleichen Pixelstelle. Der Vorteil ist jedoch, dass EM basierte Media Queries auf 
Textzoom reagieren und sich Viewports dementsprechend verändern. Wenn der Textzoom also gross genug ist, 
wechselt der Browser automatisch von z.B. Medium auf Small Screen und somit erfüllen wir wieder den Ansatz "Think 
Content, not Devices", da wir ja nicht wissen können, ob ein Endgerät möglicherweise einen standard Textzoom 
voreingestellt oder vom User manuell gesetzt bekommen hat. [EMs have it](http://blog.cloudfour.com/the-ems-have-it-proportional-media-queries-ftw/)