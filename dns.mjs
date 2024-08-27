import dns from 'dns/promises';

const ip = await dns.lookup("www.programmerzamannow.com")

// ip address  .address emng dari dns-nya
console.info(ip.address)
// ip address family
console.info(ip.family)

//  https://nodejs.org/docs/v20.17.0/api/dns.html

