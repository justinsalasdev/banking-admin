import * as admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      privateKey:
        "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDn8vSUP9VzRiK5\n5zGCOa8Uw1Iv3bnLqXOZZ9ADHhWNA1dwsNyhooznavbVqL6KLRvgN+54IqmLu7Ch\nqnWt2I1CKju5LvtBDjYUPRDa5VPwAqJrbDDc0ruxKC/O6T0Qlr+CyHdBz6jbiqHJ\n5GN9JyPioImHTy7gLgKW3da74YylDd2Pd15ORb/NLWxqBNMPT1QAds4YI0l2FcKP\nOsl/fnzmDI3KcE+Nv5H8AbL4QWBhT8pnYoVLlq077DJRHhj9icRYX+ux0Jb6TeQT\nLBzQn1NwNJMV4TWkOCtzj59AIUUjo4vttKVp57e0WDxr7ROEZwr7yPgV6YHbyVrF\nV4EE+NHxAgMBAAECgf9DRfQqC1mdVXo88REq9BATtZLgzy5UI5GjrLhoLxGRFKcH\nyEQ1nS/A7wUocwjQisTLA23m6ibCoG1adlYrVeOijR1FWJsHA1gsBooc8ualdh4l\nifuiEHzfpQg4uu07In3pMLtmGxSemFbUd6ljYzbFREqfNBgkbTPTDgR5+bERLabx\nKvgihitF7DzVdic5Q9ueD1Hy5Q4dpqOkOg6NbJQdcX1RddELHuvepeGBtCBXMheY\nfZD2tnk1TvOjZv7btgQAtFdYnkx+RS3q4dfLOJNhsPBn5E2biYcysWXLzCQgVEl7\nXrcxVHvj6VRzWJhInuFKBVjiKKHNZNCHIrSz+z0CgYEA+W8JtbaJsxhil6z2TvOl\nm33r5FqVyzxuWex7rafzTRvkIsdODOxSgzULC1+zA+vT5ZMfDR4Lx90xJhVvcVch\nU/pZ1enmIp5dZhyTZXXsaRly7uSZYtt7RzjABitds71LW3iBoll1uDChX71ABx9q\nAoN+vodRnsYd58M5DDnsLc0CgYEA7g4WC4karbqCY8y/QtKtv8+KRDc1j22FxnE3\nGSfFWQdH8yk7p3doAeFx6W7kGRL5G9oDIGqkG/IDwyai/PJo368mg++0g31RTC9F\n7sY498bAiSM13SE1GNwYiL3lZpCurvQ6FqxNL+LjyVVJxGexeo8K1QnVCEhvkk8B\nNLP+MLUCgYEAy0By3hJ3VGvrcwLq1lzttq2+OZ6i7zA4D6iHA3OW619t3/UeIaO0\nfNwNOuBphCl3ylu+8rZoDR2tvgW7gNTqAH9BEvF8qPr4yotAhG26Dc5B/G5kmsyU\nQO36c0yFF0CJlmi04bEaHtPpu5UABo3PmWrDLcggd0ui9Mb8xnyweoUCgYA0TIfv\nVNm1nSoUPuEuDxb48uGPhwmPTyJ6rFjMf/5NRto5w69FZWhGMX9TJ3eZQp/TzJuv\nPX58XTkSYKSiKad8rQArMDhaQuffcutMP+Q4G0QlXMTypd8CbSg+sml5lQOrkCBK\n5uO2R4R/sOsZ6SYGpPJeR2C0ByXr4MuFBp4rmQKBgQCby3XJpm3jK+fDFk9XhfPY\nzTL1STMpcgGIy5huVI7dmvJ7mgMm3znjxwdRGRsgXx15mm0LErL92xWuRdzo7HXD\nLweBHNHl0KJGQshK/pt4dgLKyO1oOpZqtD1T21lzLZIZ3tSDuA4M6ABugXn3ZDQr\nwtYhPzDJFnyC9iNzFoamEg==\n-----END PRIVATE KEY-----\n",
      clientEmail:
        "firebase-adminsdk-yr3pe@banking-app-2782b.iam.gserviceaccount.com",
      projectId: "banking-app-2782b"
    })
  });
}

const db = admin.firestore();

export { admin, db };
