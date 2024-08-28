// Resources:

// https://github.com/DedaDev/jmbg/blob/master/src/regions.json
//
// https://sr.wikipedia.org/sr-ec/Јединствени_матични_број_грађанина
// https://hr.wikipedia.org/wiki/Matični_broj_građana
// https://sh.wikipedia.org/wiki/Jedinstveni_matični_broj_građana
// https://en.wikipedia.org/wiki/Unique_Master_Citizen_Number

interface IRegion {
  label: string;
  regions: { [key: string]: string };
}

export const Regions: IRegion[] = [
  {
    label: 'Stranci bez državljanstva.',
    regions: {
      '01': 'Bosna i Hercegovina',
      '02': 'Crna Gora',
      '03': 'Hrvatska',
      '04': 'Republika Sjeverna Makedonija',
      '05': 'Slovenija',
      '07': 'Srbija',
      '08': 'Vojvodina',
      '09': 'Kosovo i Metohija',
    },
  },
  {
    label: 'Bosna i Hercegovina',
    regions: {
      '10': 'Banja Luka',
      '11': 'Bihać',
      '12': 'Doboj',
      '13': 'Goražde',
      '14': 'Livno',
      '15': 'Mostar',
      '16': 'Prijedor',
      '17': 'Sarajevo',
      '18': 'Tuzla',
      '19': 'Zenica',
    },
  },
  {
    label: 'Crna Gora',
    regions: {
      '21': 'Podgorica, Danilovgrad, Kolašin',
      '22': 'Bar, Ulcinj',
      '23': 'Budva, Kotor, Tivat',
      '24': 'Herceg Novi',
      '25': 'Cetinje',
      '26': 'Nikšić',
      '27': 'Berane, Rožaje, Plav, Andrijevica',
      '28': 'Bijelo Polje, Mojkovac',
      '29': 'Pljevlja, Žabljak',
    },
  },
  {
    label: 'Hrvatska',
    regions: {
      '30': 'Osijek, Slavonija region',
      '31': 'Bjelovar, Virovitica, Koprivnica, Pakrac, Podravina region',
      '32': 'Varaždin, Međumurje region',
      '33': 'Zagreb',
      '34': 'Karlovac',
      '35': 'Gospić, Lika region',
      '36': 'Rijeka, Pula, Istra and Primorje region',
      '37': 'Sisak, Banovina region',
      '38': 'Split, Zadar, Dubrovnik, Dalmacija region',
    },
  },
  {
    label: 'Republika Sjeverna Makedonija',
    regions: {
      '41': 'Bitola',
      '42': 'Kumanovo',
      '43': 'Ohrid',
      '44': 'Prilep',
      '45': 'Skopje',
      '46': 'Strumica',
      '47': 'Tetovo',
      '48': 'Veles',
      '49': 'Štip',
    },
  },
  {
    label: 'Slovenija',
    regions: {
      '50': 'Slovenija',
    },
  },
  {
    label: 'Građani sa privremenim boravkom',
    regions: {
      '60': 'Građani sa privremenim boravkom',
      '61': 'Građani sa privremenim boravkom',
      '62': 'Građani sa privremenim boravkom',
      '63': 'Građani sa privremenim boravkom',
      '64': 'Građani sa privremenim boravkom',
      '65': 'Građani sa privremenim boravkom',
      '66': 'Građani sa privremenim boravkom',
      '67': 'Građani sa privremenim boravkom',
      '68': 'Građani sa privremenim boravkom',
      '69': 'Građani sa privremenim boravkom',
    },
  },
  {
    label: 'Centralna Srbija',
    regions: {
      '71': 'Beograd',
      '72': 'Šumadija',
      '73': 'Niš',
      '74': 'Južna Morava',
      '75': 'Zaječar',
      '76': 'Podunavlje',
      '77': 'Podrinje i Kolubara',
      '78': 'Kraljevo',
      '79': 'Užice',
    },
  },
  {
    label: 'Vojvodina',
    regions: {
      '80': 'Novi Sad',
      '81': 'Sombor',
      '82': 'Subotica',
      '85': 'Zrenjanin',
      '86': 'Pančevo',
      '87': 'Kikinda',
      '88': 'Ruma',
      '89': 'Sremska Mitrovica',
    },
  },
  {
    label: 'Kosovo i Metohija',
    regions: {
      '91': 'Priština',
      '92': 'Kosovska Mitrovica',
      '93': 'Peć',
      '94': 'Đakovica',
      '95': 'Prizren',
      '96': 'Kosovsko Pomoravski okrug',
    },
  },
];
