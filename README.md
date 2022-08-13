### Weather app

Funkčnosti:

 - aplikace umí zobrazit počasí kde je jako defaultně nastavené město Olomouc
 - zobrazí se we widgetech pro dalších 7 dní
 - hlavní widget je s podrobnostmi na dnešní den
 - aplikcae umí porovnat 2 rozdílná města
 - vyhledávání měst je s našeptávačem
 - zobrazení hodnot v grafu
 - aplikace umí měnit pozadí


Technická stránka:

Aplikace je vytvořená v Reactu s použítím TypeScriptu

  - data se přenáší použitím context provideru kde jsou data nasazeny s použitím useStatu
  - routing je podle lazy routingu tak aby se dle potřeby mohli přidávat další pages jako objekt
  - je zde api client kde se nastavují peths na různé endpointy, paths jsou uložený samostatně
    v pathHelperu aby se cesty upravovali z jednoho místa

