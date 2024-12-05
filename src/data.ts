import axios from '@/lib/axios'

// export async function getOrder(id: string) {
//   return (await getOrders()).find((order) => order.id.toString() === id)!
// }

export async function getSchedules() {
  return axios.get('/api/schedule').then((res) => res.data.data)
}

export async function getStudents(page: string) {
  return axios.get(`/api/students?page=${page}`).then((res) => res.data)
}

export async function getEvent(id: string) {
  return (await getEvents()).find((event) => event.id.toString() === id)!
}

export async function getEvents() {
  return [
    {
      id: 1000,
      name: 'Bear Hug: Live in Concert',
      url: '/events/1000',
      date: 'May 20, 2024',
      time: '10 PM',
      location: 'Harmony Theater, Winnipeg, MB',
      totalRevenue: '$102,552',
      totalRevenueChange: '+3.2%',
      ticketsAvailable: 500,
      ticketsSold: 350,
      ticketsSoldChange: '+8.1%',
      pageViews: '24,300',
      pageViewsChange: '-0.75%',
      status: 'On Sale',
      imgUrl: '/events/bear-hug.jpg',
      thumbUrl: '/events/bear-hug-thumb.jpg',
    },
    {
      id: 1001,
      name: 'Six Fingers — DJ Set',
      url: '/events/1001',
      date: 'Jun 2, 2024',
      time: '8 PM',
      location: 'Moonbeam Arena, Uxbridge, ON',
      totalRevenue: '$24,115',
      totalRevenueChange: '+3.2%',
      ticketsAvailable: 150,
      ticketsSold: 72,
      ticketsSoldChange: '+8.1%',
      pageViews: '57,544',
      pageViewsChange: '-2.5%',
      status: 'On Sale',
      imgUrl: '/events/six-fingers.jpg',
      thumbUrl: '/events/six-fingers-thumb.jpg',
    },
    {
      id: 1002,
      name: 'We All Look The Same',
      url: '/events/1002',
      date: 'Aug 5, 2024',
      time: '4 PM',
      location: 'Electric Coliseum, New York, NY',
      totalRevenue: '$40,598',
      totalRevenueChange: '+3.2%',
      ticketsAvailable: 275,
      ticketsSold: 275,
      ticketsSoldChange: '+8.1%',
      pageViews: '122,122',
      pageViewsChange: '-8.0%',
      status: 'Closed',
      imgUrl: '/events/we-all-look-the-same.jpg',
      thumbUrl: '/events/we-all-look-the-same-thumb.jpg',
    },
    {
      id: 1003,
      name: 'Viking People',
      url: '/events/1003',
      date: 'Dec 31, 2024',
      time: '8 PM',
      location: 'Tapestry Hall, Cambridge, ON',
      totalRevenue: '$3,552',
      totalRevenueChange: '+3.2%',
      ticketsAvailable: 40,
      ticketsSold: 6,
      ticketsSoldChange: '+8.1%',
      pageViews: '9,000',
      pageViewsChange: '-0.15%',
      status: 'On Sale',
      imgUrl: '/events/viking-people.jpg',
      thumbUrl: '/events/viking-people-thumb.jpg',
    },
  ]
}

export function getCountries() {
  return [
    {
      name: 'Canada',
      code: 'CA',
      flagUrl: '/flags/ca.svg',
      regions: [
        'Alberta',
        'British Columbia',
        'Manitoba',
        'New Brunswick',
        'Newfoundland and Labrador',
        'Northwest Territories',
        'Nova Scotia',
        'Nunavut',
        'Ontario',
        'Prince Edward Island',
        'Quebec',
        'Saskatchewan',
        'Yukon',
      ],
    },
    {
      name: 'Mexico',
      code: 'MX',
      flagUrl: '/flags/mx.svg',
      regions: [
        'Aguascalientes',
        'Baja California',
        'Baja California Sur',
        'Campeche',
        'Chiapas',
        'Chihuahua',
        'Ciudad de Mexico',
        'Coahuila',
        'Colima',
        'Durango',
        'Guanajuato',
        'Guerrero',
        'Hidalgo',
        'Jalisco',
        'Mexico State',
        'Michoacán',
        'Morelos',
        'Nayarit',
        'Nuevo León',
        'Oaxaca',
        'Puebla',
        'Querétaro',
        'Quintana Roo',
        'San Luis Potosí',
        'Sinaloa',
        'Sonora',
        'Tabasco',
        'Tamaulipas',
        'Tlaxcala',
        'Veracruz',
        'Yucatán',
        'Zacatecas',
      ],
    },
    {
      name: 'United States',
      code: 'US',
      flagUrl: '/flags/us.svg',
      regions: [
        'Alabama',
        'Alaska',
        'American Samoa',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'Delaware',
        'Washington DC',
        'Micronesia',
        'Florida',
        'Georgia',
        'Guam',
        'Hawaii',
        'Idaho',
        'Illinois',
        'Indiana',
        'Iowa',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Maine',
        'Marshall Islands',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
        'Northern Mariana Islands',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Palau',
        'Pennsylvania',
        'Puerto Rico',
        'Rhode Island',
        'South Carolina',
        'South Dakota',
        'Tennessee',
        'Texas',
        'Utah',
        'Vermont',
        'U.S. Virgin Islands',
        'Virginia',
        'Washington',
        'West Virginia',
        'Wisconsin',
        'Wyoming',
        'Armed Forces Americas',
        'Armed Forces Europe',
        'Armed Forces Pacific',
      ],
    },
  ]
}
