import michal from '../../../../public/images/panelists/mtrzesimiech.png'
import maja from '../../../../public/images/panelists/mjaryczewska.png'
import marcin from '../../../../public/images/panelists/mtischner.png'
import maria from '../../../../public/images/panelists/mtruong.png'

const hosts = {
  mtrzesimiech: {
    name: 'Michał Trzęsimiech',
    desc:
      'Założyciel Fundacji Efektywny Altruizm. Przedsiębiorca non-profit oraz konsultant działający w zaniedbanych, choć ważnych obszarach aktywności publicznej. Organizator międzynarodowej społeczności Effective Altruism i inicjator jej struktur w Polsce.',
    photo: michal,
  },
  mjaryczewska: {
    name: 'Maja Laura Jaryczewska',
    desc:
      'Członkini Zarządu oraz PR & Fundraising Manager Fundacji Efektywny Altruizm. Studiuje kompozycję oraz fortepian jazzowy na Akademii Muzycznej w Gdańsku. Tworzy pod pseudonimem Maja Laura oraz współtworzy zespoły Abyss i Ścianka. Do niedawna wolontariuszka Otwartych Klatek.',
    photo: maja,
  },
  mtischner: {
    name: 'Marcin Tischner',
    desc:
      'Członek Zarządu odpowiedzialny za obszar rozwoju i współpracy. Poszukuje efektywnych sposobów na stworzenie bardziej zrównoważonej przyszłości żywności. Pracuje także dla ProVeg Polska, Targów Zero Waste oraz prowadzi podcast "Przyszłość. Żywność. Planeta”.',
    photo: marcin,
  },
  mtruong: {
    name: 'Maria Gembarzewska-Truong',
    desc:
      'Członkini Zarządu, zajmuje się komunikacją oraz koordynuje prace zespołu social media. Psycholożka, trenerka, HRowiec. Przyświeca jej jeden cel – tworzyć lepszy świat. Miłośniczka jogi, wycieczek górskich i zwierzęcej behawiorystyki.',
    photo: maria,
  },
}

const workshops = [
  {
    id: 1,
    title: 'Warsztaty z efektywności w rzecznictwie',
    shortSummary:
      'Jak działać efektywnie w obszarze rzecznictwa w społecznie istotnych kwestiach?',
    audience: 'pracowników organizacji pozarządowych',
    summary:
      'Świat jest złożony, a nasz rozum – ograniczony. Jako gatunek jesteśmy kiepscy w przewidywaniu przyszłych wydarzeń. A jednak niektóre działania przynoszą znacząco lepszy rezultat, niż inne, o zbliżonym celu. Czy odpowiada za to wyłącznie los? A może jesteśmy w stanie zarządzić działaniem tak, aby przynieść światu zdecydowanie więcej dobra, niż miałoby to miejsce, gdybyśmy zadziałali inaczej? W trakcie tych warsztatów poszukamy odpowiedzi na pytanie o to, jak działać efektywnie, odnosząc się w szczególności do działań w obszarze rzecznictwa.',
    limit: 'brak limitu uczestników',
    duration: '3 godziny',
    price: 'pierwszy wykład bez opłaty',
    modules: [
      'Panel wprowadzający (60 minut)',
      'Dyskusja (30 minut)',
      'Warsztat (90 minut)',
    ],
    hosts: [hosts.mtrzesimiech],
  },
  {
    id: 2,
    title:
      'Warsztaty z ocalania świata. O globalnych ryzykach katastroficznych',
    shortSummary:
      'Jak zapobiec kolejnej pandemii? Co z innymi zagrożeniami? Jak w nadchodzącej dekadzie zapobiec globalnym katastrofom?',
    audience:
      'konferencji dotyczących pandemii i zmian klimatycznych, środowiska filozofów i etyków, młodzieży szkolnej',
    summary:
      'Czy pandemiom można zapobiec? A jeśli tak, to w jaki sposób zapobiec kolejnej? Jakie inne ryzyka pomijamy - i czy je także możemy kontrolować? Od cyberwojny po nieudane eksperymenty biotechnologiczne i ekstremalne zjawiska pogodowe związane z ociepleniem klimatu, przeprowadzimy was przez najczarniejsze scenariusze nieodległych przyszłości, a także sposoby, dzięki którym ludzkość może wyjść obronną ręką z obecnych i przyszłych kryzysów.',
    limit: 'brak limitu uczestników',
    duration: '3 godziny',
    price: 'pierwszy wykład bez opłaty',
    modules: [
      'Panel wprowadzający (60 minut)',
      'Dyskusja (30 minut)',
      'Warsztat (90 minut)',
    ],
    hosts: [hosts.mtrzesimiech],
  },
  {
    id: 3,
    title: 'Dobrostan zawodowy',
    shortSummary:
      'Dobrostan zawodowy wpływa na to czy czujemy się w naszej pracy dobrze. Jak go osiągnąć?',
    audience: 'pracowników korporacji',
    summary:
      'Dobrostan zawodowy wpływa na to czy czujemy się w naszej pracy dobrze. Tak jakbyśmy byli dokładnie w tym miejscu, w którym powinniśmy się znaleźć. Nie chodzi o poczucie rozpierającej euforii przez 100% czasu w pracy, ale o poczucie, że jest mi dobrze tu, gdzie jestem a to daje mi poczucie spokoju. Sprawia, że wierzę, w to, że moja praca wspiera mnie i wspiera realizację moich celów życiowych. Wpływa na realizację mojej agendy życiowej (a nie przeszkadza). Aby osiągnąć dobrostan zawodowy należy zadbać o kilka obszarów. Podczas tego spotkania omówimy każdy z tych obszarów oraz podamy praktyczne wskazówki, które wpływają na wzrost w tych obszarach.',
    limit: 'brak limitu uczestników',
    duration: '60 minut',
    price: 'pierwszy wykład bez opłaty',
    hosts: [hosts.mtruong],
  },
  {
    id: 4,
    title: 'Efektywny Altruizm & Doradztwo filantropijne',
    shortSummary:
      'Masz wyjątkowe możliwości, aby czynić dobro - dowiedz się w jaki sposób je zmaksymalizować!',
    audience:
      'filantropów, pracowników działu CSR i PR w korporacjach, pracowników organizacji pozarządowych współpracujących z biznesem, fundacji korporacyjnych, fundacji i instytucji grantodawczych',
    limit: 'brak limitu uczestników',
    summary:
      'Gdy potrzebujemy pomocy medycznej, wybieramy sposoby leczenia, których skuteczność została potwierdzona naukowo. Gdy inwestujemy pieniądze, staramy się dowiedzieć jak najwięcej o wszystkich możliwościach, żeby wybrać taką, która przyniesie nam największe korzyści. Gdy kupujemy jakiś produkt, czytamy opinie wystawiane przez kupujących, żeby dowiedzieć się, czy produkt faktycznie działa tak, jak tego oczekujemy. Czy w ten sam sposób analizujemy działalność charytatywną, którą wspieramy finansowo? Jeśli chodzi o czynienie dobra, zapominamy jednak o naszych standardach. Przekazujemy pieniądze organizacjom charytatywnym tylko dlatego, że ktoś podszedł do nas na ulicy, a prawie nigdy nie dowiadujemy się, jak nasze pieniądze zostały wykorzystane. Jesteśmy wolontariuszami w organizacjach, bo działąją lokalnie, a nie dlatego, że są efektywne. Kupujemy produkty “etyczne”, bo są oznaczone pewnymi etykietami, bez wgłębiania się w to, co one faktycznie oznaczają. W rezultacie, dobre intencje są często zmarnowane, bo ludzie wykorzystują swój czas i pieniądze na wspieranie celów, które przynoszą stosunkowo mało korzyści. Masz wyjątkowe możliwości, aby czynić dobro - dowiedz się w jaki sposób je zmaksymalizować!',
    duration: '60 minut',
    price: 'pierwszy wykład bez opłaty',
    hosts: [hosts.mtischner],
  },
  {
    id: 5,
    title: 'Wprowadzenie do Efektywnego Altruizmu',
    shortSummary:
      'Czy uważasz, że świat mógłby być lepszy? Czy chcesz mieć wpływ na jego pozytywną zmianę? Jak czynić dobro lepiej?',
    summary:
      '"Efektywny Altruizm to międzynarodowa społeczność, która szuka odpowiedzi na jedno ważne pytanie: "jak przynieść światu najwięcej dobra?" Zdobytą wiedzę wykorzystujemy w praktyce, skupiając działania w obszarach, które wymagają największej uwagi . Okazuje się, że przy użyciu ograniczonych środków możemy dokonać realnych zmian w świecie. Podczas tego spotkania opowiemy Wam historię Efektywnego Altruizmu – ruchu oraz idei, z której ruch ten wyrasta. Wychodząc od pytań filozoficznych omówimy szereg praktycznych zagadnień związanych z dobroczynnością. Wyjdziecie stąd z najlepszą dostępną nam wiedzą o tym, jak czynić dobro efektywnie – i co to właściwie oznacza. Samodzielnie odpowiecie też na pytanie, jaki Wy sami możecie mieć wkład w największą możliwą poprawę świata.',
    recommended: true,
    audience:
      'pracowników korporacji, studentów, pracowników i wolontariuszy organizacji pozarządowych, administracji publicznej, fundacji korporacyjnych, fundacje i instytucje grantodawczych',
    limit: 'brak limitu uczestników',
    duration: '60 minut',
    price: 'pierwszy wykład bez opłaty',
    hosts: [hosts.mtrzesimiech, hosts.mjaryczewska],
  },
]

export default workshops
