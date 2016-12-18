/* eslint-disable */
module.exports = {
	dataOrgs: {
		"meta": {
		"total-rows": "18",
		"total-pages": 1
		},
		"links": {
		"self": "/organisations?sort=organisationName&offset=0&rows=200"
		},
		"data": [
		  {
		"type": "organisations",
		"id": 1,
		"attributes": {
		"knownAs": "ABC Ltd",
		"name": "ABC Ltd",
		"audit": {
		"insertedDate": 1382007600000,
		"insertedBy": 2,
		"updatedDate": 1467769019000
		},
		"contactDetails": {
		"email": "info@nomos.co.nz",
		"contact": "You",
		"phone": "0800 696 666"
		},
		"address": {
		"addressLine1": "1 Bath Street",
		"addressLine2": "CBD.",
		"addressLine3": "Dunedin",
		"city": "Dunedin",
		"state": "9016",
		"postcode": "9016",
		"country": "New Zealand"
		},
		"defaultReminderDays": 30,
		"organisationStatus": "Active",
		"licenseType": "LEGAL SMALL",
		"defaultCurrency": "NZD",
		"website": "www.primoproducts.co.nz",
		"billing": {
		"chargingCurrency": "NZD",
		"isADummy": "Yes"
		},
		"salesperson": "1",
		"defaultAreaUnits": "m&sup2;",
		"invoiceDetails": {
		"addressInclude": "Yes",
		"address": "1 Bath Street, CBD., Dunedin, 9016",
		"taxNumberInclude": "Yes",
		"phoneInclude": "Yes",
		"phone": "0800 696 666",
		"dueDate": "20th",
		"prefixInclude": "Yes",
		"prefix": "TEST-",
		"referenceId": "SYSID",
		"logoInclude": "Yes",
		"taxNumber": "123-456-789 Test",
		"taxRate": "15.00",
		"taxLabel": "GST",
		"taxRateSysid": "17",
		"xeroTaxCode": "OUTPUT2",
		"accessToken": {
		"xero": {
		"oauthAccessToken": "4JIEWJ7KQGTXCKCXLA7WTR0XKZDNVD",
		"oauthAccessTokenSecret": "IXUBEHUBBZCFJDOZFTDGKPK2SXYOYE",
		"connectedAt": 1467772592183,
		"accountToInvoice": "200 - Sales"
		}
		}
		},
		"onboarding": {
		"doNotCall": "No"
		}
		},
		"relationships": {
		"accounts": {
		"links": {
		"self": "/organisations/1/relationships/accounts/",
		"related": "/accounts/"
		},
		"data": [
		  {
		"type": "accounts",
		"id": "1"
		},
		  {
		"type": "accounts",
		"id": "3"
		},
		  {
		"type": "accounts",
		"id": "5"
		},
		  {
		"type": "accounts",
		"id": "48"
		},
		  {
		"type": "accounts",
		"id": "49"
		},
		  {
		"type": "accounts",
		"id": "50"
		},
		  {
		"type": "accounts",
		"id": "220"
		},
		  {
		"type": "accounts",
		"id": "1406"
		}
		],
		}
		}
		},
		  {
		"type": "organisations",
		"id": 655,
		"attributes": {
		"knownAs": "Asdadadadadaaaa",
		"name": "Asdadadadadaaaa",
		"audit": {
		"insertedDate": 1447038068000,
		"insertedBy": 2,
		"updatedDate": 1467756811000
		},
		"contactDetails": {
		"email": "david.bromley@gmail.com"
		},
		"address": {
		"addressLine1": "23 asfa",
		"country": "New Zealand"
		},
		"defaultReminderDays": 90,
		"organisationStatus": "Active",
		"licenseType": "PROPERTY TEMPTER",
		"defaultCurrency": "NZD",
		"billing": {
		"chargingCurrency": "NZD",
		"isADummy": "Yes"
		},
		"defaultAreaUnits": "m&sup2;",
		"invoiceDetails": {
		"addressInclude": "Yes",
		"address": "23 asfa",
		"taxNumberInclude": "Yes",
		"phoneInclude": "Yes",
		"phone": "",
		"dueDate": "1st",
		"prefixInclude": "Yes",
		"prefix": "INV-",
		"referenceId": "SYSID",
		"logoInclude": "Yes",
		"taxRate": "15.00",
		"taxLabel": "GST",
		"taxRateSysid": "17",
		"xeroTaxCode": "OUTPUT2"
		},
		"onboarding": {
		"doNotCall": "No"
		}
		},
		"relationships": {
		"accounts": {
		"links": {
		"self": "/organisations/655/relationships/accounts/",
		"related": "/accounts/"
		},
		"data": [
		  {
		"type": "accounts",
		"id": "1639"
		}
		],
		}
		}
		},
		  {
		"type": "organisations",
		"id": 695,
		"attributes": {
		"knownAs": "Castle Hill Wind Farm",
		"name": "Castle Hill Wind Farm",
		"audit": {
		"insertedDate": 1449094234000,
		"insertedBy": 378,
		"updatedDate": 1467756814000
		},
		"contactDetails": {
		"email": "admin@nomosone.com",
		"contact": "Admin"
		},
		"address": {
		"addressLine1": "NZ",
		"country": "New Zealand"
		},
		"defaultReminderDays": 90,
		"organisationStatus": "Active",
		"licenseType": "PROPERTY TEMPTER",
		"defaultCurrency": "NZD",
		"billing": {
		"organisationId": "607",
		"contact": "Admin",
		"email": "admin@nomosone.com",
		"chargingCurrency": "NZD",
		"isADummy": "No"
		},
		"defaultAreaUnits": "m&sup2;",
		"invoiceDetails": {
		"addressInclude": "Yes",
		"address": "NZ",
		"taxNumberInclude": "Yes",
		"phoneInclude": "Yes",
		"phone": "",
		"dueDate": "1st",
		"prefixInclude": "Yes",
		"prefix": "INV-",
		"referenceId": "SYSID",
		"logoInclude": "Yes",
		"taxRate": "15.00",
		"taxLabel": "GST",
		"taxRateSysid": "17",
		"xeroTaxCode": "OUTPUT2"
		},
		"onboarding": {
		"doNotCall": "No"
		}
		},
		"relationships": {
		"parent": {
		"links": {
		"self": "/organisations/695/relationships/parents/",
		"related": "/organisations/"
		},
		"data": {
		"type": "organisations",
		"id": "607"
		}
		},
		"accounts": {
		"links": {
		"self": "/organisations/695/relationships/accounts/",
		"related": "/accounts/"
		},
		"data": [
		  {
		"type": "accounts",
		"id": "1727"
		},
		  {
		"type": "accounts",
		"id": "1735"
		},
		  {
		"type": "accounts",
		"id": "1903"
		},
		  {
		"type": "accounts",
		"id": "1904"
		},
		  {
		"type": "accounts",
		"id": "1905"
		},
		  {
		"type": "accounts",
		"id": "1906"
		},
		  {
		"type": "accounts",
		"id": "1907"
		},
		  {
		"type": "accounts",
		"id": "2012"
		},
		  {
		"type": "accounts",
		"id": "2088"
		}
		],
		}
		}
		},
		  {
		"type": "organisations",
		"id": 682,
		"attributes": {
		"knownAs": "DO NOT TOUCH DEMO MASTER",
		"name": "DO NOT TOUCH DEMO MASTER",
		"audit": {
		"insertedDate": 1448419971000,
		"insertedBy": 2,
		"updatedDate": 1467756812000
		},
		"contactDetails": {
		"email": "dave@nomosone.com"
		},
		"address": {
		"country": "New Zealand"
		},
		"defaultReminderDays": 90,
		"organisationStatus": "Active",
		"licenseType": "DEMO",
		"defaultCurrency": "NZD",
		"billing": {
		"chargingCurrency": "NZD",
		"isADummy": "Yes"
		},
		"defaultAreaUnits": "m&sup2;",
		"invoiceDetails": {
		"addressInclude": "Yes",
		"address": "",
		"taxNumberInclude": "Yes",
		"phoneInclude": "Yes",
		"phone": "",
		"dueDate": "1st",
		"prefixInclude": "Yes",
		"prefix": "INV-",
		"referenceId": "SYSID",
		"logoInclude": "Yes",
		"taxRate": "15.00",
		"taxLabel": "GST",
		"taxRateSysid": "17",
		"xeroTaxCode": "OUTPUT2"
		},
		"onboarding": {
		"doNotCall": "No"
		}
		},
		"relationships": {
		"accounts": {
		"links": {
		"self": "/organisations/682/relationships/accounts/",
		"related": "/accounts/"
		},
		"data": [
		  {
		"type": "accounts",
		"id": "1697"
		}
		],
		}
		}
		},
		  {
		"type": "organisations",
		"id": 697,
		"attributes": {
		"knownAs": "David's Demo Org",
		"name": "David's Demo Org",
		"audit": {
		"insertedDate": 1449196761000,
		"updatedDate": 1467756814000
		},
		"contactDetails": {
		"email": "dave@nomosone.com"
		},
		"address": {
		"country": "New Zealand"
		},
		"defaultReminderDays": 90,
		"organisationStatus": "Active",
		"licenseType": "DEMO",
		"defaultCurrency": "NZD",
		"billing": {
		"chargingCurrency": "NZD",
		"isADummy": "Yes"
		},
		"defaultAreaUnits": "m&sup2;",
		"invoiceDetails": {
		"addressInclude": "Yes",
		"address": "",
		"taxNumberInclude": "Yes",
		"phoneInclude": "Yes",
		"phone": "",
		"dueDate": "1st",
		"prefixInclude": "Yes",
		"prefix": "INV-",
		"referenceId": "SYSID",
		"logoInclude": "Yes",
		"taxRate": "15.00",
		"taxLabel": "GST",
		"taxRateSysid": "17",
		"xeroTaxCode": "OUTPUT2"
		},
		"onboarding": {
		"doNotCall": "No"
		}
		},
		"relationships": {
		"accounts": {
		"links": {
		"self": "/organisations/697/relationships/accounts/",
		"related": "/accounts/"
		},
		"data": [
		  {
		"type": "accounts",
		"id": "1729"
		}
		],
		}
		}
		},
		  {
		"type": "organisations",
		"id": 675,
		"attributes": {
		"knownAs": "David's Demo Org1",
		"name": "David's Demo Org1",
		"audit": {
		"insertedDate": 1448404716000,
		"insertedBy": 2,
		"updatedDate": 1467756812000
		},
		"contactDetails": {
		"email": "dave@nomosone.com"
		},
		"address": {
		"country": "New Zealand"
		},
		"defaultReminderDays": 90,
		"organisationStatus": "Active",
		"licenseType": "DEMO",
		"defaultCurrency": "NZD",
		"billing": {
		"chargingCurrency": "NZD",
		"isADummy": "Yes"
		},
		"defaultAreaUnits": "m&sup2;",
		"invoiceDetails": {
		"addressInclude": "Yes",
		"address": "",
		"taxNumberInclude": "Yes",
		"phoneInclude": "Yes",
		"phone": "",
		"dueDate": "1st",
		"prefixInclude": "Yes",
		"prefix": "INV-",
		"referenceId": "SYSID",
		"logoInclude": "Yes",
		"taxRate": "15.00",
		"taxLabel": "GST",
		"taxRateSysid": "17",
		"xeroTaxCode": "OUTPUT2"
		},
		"onboarding": {
		"doNotCall": "No"
		}
		},
		"relationships": {
		"accounts": {
		"links": {
		"self": "/organisations/675/relationships/accounts/",
		"related": "/accounts/"
		},
		"data": [
		  {
		"type": "accounts",
		"id": "1690"
		}
		],
		}
		}
		},
		  {
		"type": "organisations",
		"id": 677,
		"attributes": {
		"knownAs": "David's Demo Org2",
		"name": "David's Demo Org2",
		"audit": {
		"insertedDate": 1448413657000,
		"insertedBy": 2,
		"updatedDate": 1467756812000
		},
		"contactDetails": {
		"email": "dave@nomosone.com"
		},
		"address": {
		"country": "New Zealand"
		},
		"defaultReminderDays": 90,
		"organisationStatus": "Active",
		"licenseType": "DEMO",
		"defaultCurrency": "NZD",
		"billing": {
		"chargingCurrency": "NZD",
		"isADummy": "Yes"
		},
		"defaultAreaUnits": "m&sup2;",
		"invoiceDetails": {
		"addressInclude": "Yes",
		"address": "",
		"taxNumberInclude": "Yes",
		"phoneInclude": "Yes",
		"phone": "",
		"dueDate": "1st",
		"prefixInclude": "Yes",
		"prefix": "INV-",
		"referenceId": "SYSID",
		"logoInclude": "Yes",
		"taxRate": "15.00",
		"taxLabel": "GST",
		"taxRateSysid": "17",
		"xeroTaxCode": "OUTPUT2"
		},
		"onboarding": {
		"doNotCall": "No"
		}
		},
		"relationships": {
		"accounts": {
		"links": {
		"self": "/organisations/677/relationships/accounts/",
		"related": "/accounts/"
		},
		"data": [
		  {
		"type": "accounts",
		"id": "1692"
		}
		],
		}
		}
		},
		  {
		"type": "organisations",
		"id": 681,
		"attributes": {
		"knownAs": "David's Demo Org3",
		"name": "David's Demo Org3",
		"audit": {
		"insertedDate": 1448414682000,
		"insertedBy": 2,
		"updatedDate": 1467756812000
		},
		"contactDetails": {
		"email": "dave@nomosone.com"
		},
		"address": {
		"country": "New Zealand"
		},
		"defaultReminderDays": 90,
		"organisationStatus": "Active",
		"licenseType": "DEMO",
		"defaultCurrency": "NZD",
		"billing": {
		"chargingCurrency": "NZD",
		"isADummy": "Yes"
		},
		"defaultAreaUnits": "m&sup2;",
		"invoiceDetails": {
		"addressInclude": "Yes",
		"address": "",
		"taxNumberInclude": "Yes",
		"phoneInclude": "Yes",
		"phone": "",
		"dueDate": "1st",
		"prefixInclude": "Yes",
		"prefix": "INV-",
		"referenceId": "SYSID",
		"logoInclude": "Yes",
		"taxRate": "15.00",
		"taxLabel": "GST",
		"taxRateSysid": "17",
		"xeroTaxCode": "OUTPUT2"
		},
		"onboarding": {
		"doNotCall": "No"
		}
		},
		"relationships": {
		"accounts": {
		"links": {
		"self": "/organisations/681/relationships/accounts/",
		"related": "/accounts/"
		},
		"data": [
		  {
		"type": "accounts",
		"id": "1696"
		}
		],
		}
		}
		},
		  {
		"type": "organisations",
		"id": 696,
		"attributes": {
		"knownAs": "David's Demo Org4",
		"name": "David's Demo Org4",
		"audit": {
		"insertedDate": 1449196378000,
		"insertedBy": 2,
		"updatedDate": 1467756813000
		},
		"contactDetails": {
		"email": "dave@nomosone.com"
		},
		"address": {
		"country": "New Zealand"
		},
		"defaultReminderDays": 90,
		"organisationStatus": "Active",
		"licenseType": "DEMO",
		"defaultCurrency": "NZD",
		"billing": {
		"chargingCurrency": "NZD",
		"isADummy": "Yes"
		},
		"defaultAreaUnits": "m&sup2;",
		"invoiceDetails": {
		"addressInclude": "Yes",
		"address": "",
		"taxNumberInclude": "Yes",
		"phoneInclude": "Yes",
		"phone": "",
		"dueDate": "1st",
		"prefixInclude": "Yes",
		"prefix": "INV-",
		"referenceId": "SYSID",
		"logoInclude": "Yes",
		"taxRate": "15.00",
		"taxLabel": "GST",
		"taxRateSysid": "17",
		"xeroTaxCode": "OUTPUT2"
		},
		"onboarding": {
		"doNotCall": "No"
		}
		},
		"relationships": {
		"accounts": {
		"links": {
		"self": "/organisations/696/relationships/accounts/",
		"related": "/accounts/"
		},
		"data": [
		  {
		"type": "accounts",
		"id": "1728"
		}
		],
		}
		}
		},
		  {
		"type": "organisations",
		"id": 654,
		"attributes": {
		"knownAs": "FRED corp",
		"name": "FRED corp",
		"audit": {
		"insertedDate": 1447037536000,
		"insertedBy": 2,
		"updatedDate": 1467764395000
		},
		"contactDetails": {
		"email": "david.bromley@gmail.com"
		},
		"address": {
		"country": "New Zealand"
		},
		"defaultReminderDays": 90,
		"organisationStatus": "Active",
		"licenseType": "PROPERTY TEMPTER",
		"defaultCurrency": "NZD",
		"billing": {
		"chargingCurrency": "NZD",
		"isADummy": "Yes"
		},
		"defaultAreaUnits": "m&sup2;",
		"invoiceDetails": {
		"addressInclude": "Yes",
		"address": "",
		"taxNumberInclude": "Yes",
		"phoneInclude": "Yes",
		"phone": "",
		"dueDate": "1st",
		"prefixInclude": "Yes",
		"prefix": "INV-",
		"referenceId": "SYSID",
		"logoInclude": "Yes",
		"taxRate": "15.00",
		"taxLabel": "GST",
		"taxRateSysid": "17",
		"xeroTaxCode": "OUTPUT2",
		"accessToken": {
		"xero": {
		"oauthAccessToken": "I88CH8IREEJTQMUIBOZWZPZ67DLTLN",
		"oauthAccessTokenSecret": "EBUSMIQLKST62HIMVAB7FZTO3OCSSU",
		"connectedAt": 1467767995857
		}
		}
		},
		"onboarding": {
		"doNotCall": "No"
		}
		},
		"relationships": {
		"accounts": {
		"links": {
		"self": "/organisations/654/relationships/accounts/",
		"related": "/accounts/"
		},
		"data": [
		  {
		"type": "accounts",
		"id": "1632"
		},
		  {
		"type": "accounts",
		"id": "1633"
		},
		  {
		"type": "accounts",
		"id": "1634"
		},
		  {
		"type": "accounts",
		"id": "1635"
		},
		  {
		"type": "accounts",
		"id": "1636"
		},
		  {
		"type": "accounts",
		"id": "1637"
		},
		  {
		"type": "accounts",
		"id": "1638"
		}
		],
		}
		}
		},
		  {
		"type": "organisations",
		"id": 676,
		"attributes": {
		"knownAs": "Genesis Corporate Offices",
		"name": "Genesis Corporate Offices",
		"audit": {
		"insertedDate": 1448406803000,
		"insertedBy": 378,
		"updatedDate": 1467756809000
		},
		"contactDetails": {
		"email": "luke.zeilstra@genesisenergy.co.nz",
		"contact": "Admin"
		},
		"address": {
		"addressLine1": "NZ",
		"country": "New Zealand"
		},
		"defaultReminderDays": 90,
		"organisationStatus": "Active",
		"licenseType": "PROPERTY TEMPTER",
		"defaultCurrency": "NZD",
		"billing": {
		"organisationId": "607",
		"contact": "Admin",
		"email": "luke.zeilstra@genesisenergy.co.nz",
		"chargingCurrency": "NZD",
		"isADummy": "No",
		"groupDiscount": "N"
		},
		"defaultAreaUnits": "m&sup2;",
		"invoiceDetails": {
		"addressInclude": "Yes",
		"address": "NZ",
		"taxNumberInclude": "Yes",
		"phoneInclude": "Yes",
		"phone": "",
		"dueDate": "1st",
		"prefixInclude": "Yes",
		"prefix": "INV-",
		"referenceId": "SYSID",
		"logoInclude": "Yes",
		"taxRate": "15.00",
		"taxLabel": "GST",
		"taxRateSysid": "17",
		"xeroTaxCode": "OUTPUT2"
		},
		"onboarding": {
		"doNotCall": "No"
		}
		},
		"relationships": {
		"parent": {
		"links": {
		"self": "/organisations/676/relationships/parents/",
		"related": "/organisations/"
		},
		"data": {
		"type": "organisations",
		"id": "607"
		}
		},
		"accounts": {
		"links": {
		"self": "/organisations/676/relationships/accounts/",
		"related": "/accounts/"
		},
		"data": [
		  {
		"type": "accounts",
		"id": "1691"
		},
		  {
		"type": "accounts",
		"id": "1789"
		},
		  {
		"type": "accounts",
		"id": "1908"
		},
		  {
		"type": "accounts",
		"id": "1909"
		},
		  {
		"type": "accounts",
		"id": "1910"
		},
		  {
		"type": "accounts",
		"id": "1911"
		},
		  {
		"type": "accounts",
		"id": "1912"
		},
		  {
		"type": "accounts",
		"id": "2089"
		}
		],
		}
		}
		},
		  {
		"type": "organisations",
		"id": 744,
		"attributes": {
		"knownAs": "Hau Nui Wind Farm",
		"name": "Hau Nui Wind Farm",
		"audit": {
		"insertedDate": 1453075947000,
		"insertedBy": 378,
		"updatedDate": 1467756813000
		},
		"contactDetails": {
		"email": "Luke.Zeilstra@genesisenergy.co.nz",
		"contact": "Luke"
		},
		"address": {
		"addressLine1": "NZ",
		"country": "New Zealand"
		},
		"defaultReminderDays": 90,
		"organisationStatus": "Active",
		"licenseType": "PROPERTY STARTER",
		"defaultCurrency": "NZD",
		"billing": {
		"organisationId": "607",
		"contact": "Luke",
		"email": "Luke.Zeilstra@genesisenergy.co.nz",
		"chargingCurrency": "NZD",
		"isADummy": "No"
		},
		"defaultAreaUnits": "m&sup2;",
		"invoiceDetails": {
		"addressInclude": "Yes",
		"address": "NZ",
		"taxNumberInclude": "Yes",
		"phoneInclude": "Yes",
		"phone": "",
		"dueDate": "1st",
		"prefixInclude": "Yes",
		"prefix": "INV-",
		"referenceId": "SYSID",
		"logoInclude": "Yes",
		"taxRate": "15.00",
		"taxLabel": "GST",
		"taxRateSysid": "17",
		"xeroTaxCode": "OUTPUT2"
		},
		"onboarding": {
		"doNotCall": "No"
		}
		},
		"relationships": {
		"parent": {
		"links": {
		"self": "/organisations/744/relationships/parents/",
		"related": "/organisations/"
		},
		"data": {
		"type": "organisations",
		"id": "607"
		}
		},
		"accounts": {
		"links": {
		"self": "/organisations/744/relationships/accounts/",
		"related": "/accounts/"
		},
		"data": [
		  {
		"type": "accounts",
		"id": "1816"
		},
		  {
		"type": "accounts",
		"id": "1824"
		},
		  {
		"type": "accounts",
		"id": "1913"
		},
		  {
		"type": "accounts",
		"id": "1914"
		},
		  {
		"type": "accounts",
		"id": "1915"
		},
		  {
		"type": "accounts",
		"id": "1916"
		},
		  {
		"type": "accounts",
		"id": "1917"
		},
		  {
		"type": "accounts",
		"id": "2090"
		}
		],
		}
		}
		},
		  {
		"type": "organisations",
		"id": 755,
		"attributes": {
		"knownAs": "Huntly Power Station",
		"name": "Huntly Power Station",
		"audit": {
		"insertedDate": 1453666670000,
		"insertedBy": 378,
		"updatedDate": 1467756813000
		},
		"contactDetails": {
		"email": "admin@nomosone.com",
		"contact": "Admin"
		},
		"address": {
		"addressLine1": "asdfsfsf",
		"country": "New Zealand"
		},
		"defaultReminderDays": 90,
		"organisationStatus": "Active",
		"licenseType": "PROPERTY SMALL",
		"defaultCurrency": "NZD",
		"billing": {
		"organisationId": "607",
		"email": "luke.zeilstra@genesisenergy.co.nz",
		"chargingCurrency": "NZD",
		"billingNotes": " UPGRADED TO PROPERTY SMALL on 29/02/2016.",
		"isADummy": "No"
		},
		"defaultAreaUnits": "m&sup2;",
		"invoiceDetails": {
		"addressInclude": "Yes",
		"address": "asdfsfsf",
		"taxNumberInclude": "Yes",
		"phoneInclude": "Yes",
		"phone": "",
		"dueDate": "1st",
		"prefixInclude": "Yes",
		"prefix": "INV-",
		"referenceId": "SYSID",
		"logoInclude": "Yes",
		"taxRate": "15.00",
		"taxLabel": "GST",
		"taxRateSysid": "17",
		"xeroTaxCode": "OUTPUT2"
		},
		"onboarding": {
		"doNotCall": "No"
		}
		},
		"relationships": {
		"parent": {
		"links": {
		"self": "/organisations/755/relationships/parents/",
		"related": "/organisations/"
		},
		"data": {
		"type": "organisations",
		"id": "607"
		}
		},
		"accounts": {
		"links": {
		"self": "/organisations/755/relationships/accounts/",
		"related": "/accounts/"
		},
		"data": [
		  {
		"type": "accounts",
		"id": "1833"
		},
		  {
		"type": "accounts",
		"id": "1874"
		},
		  {
		"type": "accounts",
		"id": "1918"
		},
		  {
		"type": "accounts",
		"id": "1919"
		},
		  {
		"type": "accounts",
		"id": "1920"
		},
		  {
		"type": "accounts",
		"id": "1921"
		},
		  {
		"type": "accounts",
		"id": "1922"
		},
		  {
		"type": "accounts",
		"id": "2013"
		},
		  {
		"type": "accounts",
		"id": "2091"
		}
		],
		}
		}
		},
		  {
		"type": "organisations",
		"id": 742,
		"attributes": {
		"knownAs": "Meremere",
		"name": "Meremere",
		"audit": {
		"insertedDate": 1452630040000,
		"insertedBy": 378,
		"updatedDate": 1467756813000
		},
		"contactDetails": {
		"email": "admin@nomosone.com",
		"contact": "Admin"
		},
		"address": {
		"addressLine1": "NZ",
		"country": "New Zealand"
		},
		"defaultReminderDays": 90,
		"organisationStatus": "Active",
		"licenseType": "PROPERTY STARTER",
		"defaultCurrency": "NZD",
		"billing": {
		"organisationId": "607",
		"contact": "Admin",
		"email": "admin@nomosone.com",
		"chargingCurrency": "NZD",
		"isADummy": "No"
		},
		"defaultAreaUnits": "m&sup2;",
		"invoiceDetails": {
		"addressInclude": "Yes",
		"address": "NZ",
		"taxNumberInclude": "Yes",
		"phoneInclude": "Yes",
		"phone": "",
		"dueDate": "1st",
		"prefixInclude": "Yes",
		"prefix": "INV-",
		"referenceId": "SYSID",
		"logoInclude": "Yes",
		"taxRate": "15.00",
		"taxLabel": "GST",
		"taxRateSysid": "17",
		"xeroTaxCode": "OUTPUT2"
		},
		"onboarding": {
		"doNotCall": "No"
		}
		},
		"relationships": {
		"parent": {
		"links": {
		"self": "/organisations/742/relationships/parents/",
		"related": "/organisations/"
		},
		"data": {
		"type": "organisations",
		"id": "607"
		}
		},
		"accounts": {
		"links": {
		"self": "/organisations/742/relationships/accounts/",
		"related": "/accounts/"
		},
		"data": [
		  {
		"type": "accounts",
		"id": "1813"
		},
		  {
		"type": "accounts",
		"id": "1825"
		},
		  {
		"type": "accounts",
		"id": "1923"
		},
		  {
		"type": "accounts",
		"id": "1924"
		},
		  {
		"type": "accounts",
		"id": "1925"
		},
		  {
		"type": "accounts",
		"id": "1926"
		},
		  {
		"type": "accounts",
		"id": "1927"
		},
		  {
		"type": "accounts",
		"id": "2092"
		}
		],
		}
		}
		},
		  {
		"type": "organisations",
		"id": 710,
		"attributes": {
		"knownAs": "Slopedown Wind Farm",
		"name": "Slopedown Wind Farm",
		"audit": {
		"insertedDate": 1449525366000,
		"insertedBy": 378,
		"updatedDate": 1467756809000
		},
		"contactDetails": {
		"email": "admin@nomosone.com",
		"contact": "Admin"
		},
		"address": {
		"addressLine1": "NZ",
		"country": "New Zealand"
		},
		"defaultReminderDays": 90,
		"organisationStatus": "Active",
		"licenseType": "PROPERTY TEMPTER",
		"defaultCurrency": "NZD",
		"billing": {
		"organisationId": "607",
		"contact": "Admin",
		"email": "admin@nomosone.com",
		"chargingCurrency": "NZD",
		"isADummy": "No"
		},
		"defaultAreaUnits": "m&sup2;",
		"invoiceDetails": {
		"addressInclude": "Yes",
		"address": "NZ",
		"taxNumberInclude": "Yes",
		"phoneInclude": "Yes",
		"phone": "",
		"dueDate": "1st",
		"prefixInclude": "Yes",
		"prefix": "INV-",
		"referenceId": "SYSID",
		"logoInclude": "Yes",
		"taxRate": "15.00",
		"taxLabel": "GST",
		"taxRateSysid": "17",
		"xeroTaxCode": "OUTPUT2"
		},
		"onboarding": {
		"doNotCall": "No"
		}
		},
		"relationships": {
		"parent": {
		"links": {
		"self": "/organisations/710/relationships/parents/",
		"related": "/organisations/"
		},
		"data": {
		"type": "organisations",
		"id": "607"
		}
		},
		"accounts": {
		"links": {
		"self": "/organisations/710/relationships/accounts/",
		"related": "/accounts/"
		},
		"data": [
		  {
		"type": "accounts",
		"id": "1746"
		},
		  {
		"type": "accounts",
		"id": "1788"
		},
		  {
		"type": "accounts",
		"id": "1928"
		},
		  {
		"type": "accounts",
		"id": "1929"
		},
		  {
		"type": "accounts",
		"id": "1930"
		},
		  {
		"type": "accounts",
		"id": "1931"
		},
		  {
		"type": "accounts",
		"id": "1932"
		},
		  {
		"type": "accounts",
		"id": "2093"
		}
		],
		}
		}
		},
		  {
		"type": "organisations",
		"id": 620,
		"attributes": {
		"knownAs": "Tekapo",
		"name": "Tekapo",
		"audit": {
		"insertedDate": 1442884571000,
		"insertedBy": 378,
		"updatedDate": 1467756811000
		},
		"contactDetails": {
		"email": "luke.zeilstra@genesisenergy.co.nz"
		},
		"address": {
		"country": "New Zealand"
		},
		"defaultReminderDays": 90,
		"organisationStatus": "Active",
		"licenseType": "PROPERTY SMALL",
		"defaultCurrency": "NZD",
		"billing": {
		"organisationId": "607",
		"contact": "luke.zeilstra@genesisenergy.co.nz",
		"chargingCurrency": "NZD",
		"billingNotes": " UPGRADED TO PROPERTY SMALL on 01/12/2015.",
		"isADummy": "No",
		"groupDiscount": "N"
		},
		"salesperson": "1",
		"defaultAreaUnits": "m&sup2;",
		"invoiceDetails": {
		"addressInclude": "Yes",
		"address": "",
		"taxNumberInclude": "Yes",
		"phoneInclude": "Yes",
		"phone": "",
		"dueDate": "1st",
		"prefixInclude": "Yes",
		"prefix": "INV-",
		"referenceId": "SYSID",
		"logoInclude": "Yes",
		"taxRate": "15.00",
		"taxLabel": "GST",
		"taxRateSysid": "17",
		"xeroTaxCode": "OUTPUT2"
		},
		"onboarding": {
		"doNotCall": "No"
		}
		},
		"relationships": {
		"parent": {
		"links": {
		"self": "/organisations/620/relationships/parents/",
		"related": "/organisations/"
		},
		"data": {
		"type": "organisations",
		"id": "607"
		}
		},
		"accounts": {
		"links": {
		"self": "/organisations/620/relationships/accounts/",
		"related": "/accounts/"
		},
		"data": [
		  {
		"type": "accounts",
		"id": "1447"
		},
		  {
		"type": "accounts",
		"id": "1465"
		},
		  {
		"type": "accounts",
		"id": "1933"
		},
		  {
		"type": "accounts",
		"id": "1934"
		},
		  {
		"type": "accounts",
		"id": "1935"
		},
		  {
		"type": "accounts",
		"id": "1936"
		},
		  {
		"type": "accounts",
		"id": "1937"
		},
		  {
		"type": "accounts",
		"id": "2094"
		}
		],
		}
		}
		},
		  {
		"type": "organisations",
		"id": 673,
		"attributes": {
		"knownAs": "Tongariro",
		"name": "Tongariro",
		"audit": {
		"insertedDate": 1448319803000,
		"insertedBy": 378,
		"updatedDate": 1467756815000
		},
		"contactDetails": {
		"email": "admin@nomosone.com",
		"contact": "Admin"
		},
		"address": {
		"addressLine1": "NZ",
		"country": "New Zealand"
		},
		"defaultReminderDays": 90,
		"organisationStatus": "Active",
		"licenseType": "PROPERTY STARTER",
		"defaultCurrency": "NZD",
		"billing": {
		"organisationId": "607",
		"contact": "Admin",
		"email": "admin@nomosone.com",
		"chargingCurrency": "NZD",
		"billingNotes": " UPGRADED TO PROPERTY STARTER on 29/02/2016.",
		"isADummy": "No"
		},
		"defaultAreaUnits": "m&sup2;",
		"invoiceDetails": {
		"addressInclude": "Yes",
		"address": "NZ",
		"taxNumberInclude": "Yes",
		"phoneInclude": "Yes",
		"phone": "",
		"dueDate": "1st",
		"prefixInclude": "Yes",
		"prefix": "INV-",
		"referenceId": "SYSID",
		"logoInclude": "Yes",
		"taxRate": "15.00",
		"taxLabel": "GST",
		"taxRateSysid": "17",
		"xeroTaxCode": "OUTPUT2"
		},
		"onboarding": {
		"doNotCall": "No"
		}
		},
		"relationships": {
		"parent": {
		"links": {
		"self": "/organisations/673/relationships/parents/",
		"related": "/organisations/"
		},
		"data": {
		"type": "organisations",
		"id": "607"
		}
		},
		"accounts": {
		"links": {
		"self": "/organisations/673/relationships/accounts/",
		"related": "/accounts/"
		},
		"data": [
		  {
		"type": "accounts",
		"id": "1688"
		},
		  {
		"type": "accounts",
		"id": "1826"
		},
		  {
		"type": "accounts",
		"id": "1938"
		},
		  {
		"type": "accounts",
		"id": "1939"
		},
		  {
		"type": "accounts",
		"id": "1940"
		},
		  {
		"type": "accounts",
		"id": "1941"
		},
		  {
		"type": "accounts",
		"id": "1942"
		},
		  {
		"type": "accounts",
		"id": "2095"
		}
		],
		}
		}
		},
		  {
		"type": "organisations",
		"id": 610,
		"attributes": {
		"knownAs": "Waikaremoana",
		"name": "Waikaremoana",
		"audit": {
		"insertedDate": 1440636407000,
		"insertedBy": 947,
		"updatedDate": 1467756813000
		},
		"contactDetails": {
		"email": "luke.zeilstra@genesisenergy.co.nz"
		},
		"address": {
		"country": "New Zealand"
		},
		"defaultReminderDays": 90,
		"organisationStatus": "Active",
		"licenseType": "PROPERTY SMALL",
		"defaultCurrency": "NZD",
		"billing": {
		"organisationId": "607",
		"email": "luke.zeilstra@genesisenergy.co.nz",
		"chargingCurrency": "NZD",
		"billingNotes": " UPGRADED TO PROPERTY SMALL on 01/10/2015.",
		"isADummy": "No"
		},
		"salesperson": "1",
		"defaultAreaUnits": "m&sup2;",
		"invoiceDetails": {
		"addressInclude": "Yes",
		"address": "",
		"taxNumberInclude": "Yes",
		"phoneInclude": "Yes",
		"phone": "",
		"dueDate": "1st",
		"prefixInclude": "Yes",
		"prefix": "INV-",
		"referenceId": "SYSID",
		"logoInclude": "Yes",
		"taxRate": "15.00",
		"taxLabel": "GST",
		"taxRateSysid": "17",
		"xeroTaxCode": "OUTPUT2"
		},
		"onboarding": {
		"doNotCall": "No"
		}
		},
		"relationships": {
		"parent": {
		"links": {
		"self": "/organisations/610/relationships/parents/",
		"related": "/organisations/"
		},
		"data": {
		"type": "organisations",
		"id": "607"
		}
		},
		"accounts": {
		"links": {
		"self": "/organisations/610/relationships/accounts/",
		"related": "/accounts/"
		},
		"data": [
		  {
		"type": "accounts",
		"id": "1403"
		},
		  {
		"type": "accounts",
		"id": "1417"
		},
		  {
		"type": "accounts",
		"id": "1943"
		},
		  {
		"type": "accounts",
		"id": "1944"
		},
		  {
		"type": "accounts",
		"id": "1945"
		},
		  {
		"type": "accounts",
		"id": "1946"
		},
		  {
		"type": "accounts",
		"id": "1947"
		},
		  {
		"type": "accounts",
		"id": "2096"
		}
		],
		}
		}
		}
		],
		"included": [],
		}
}