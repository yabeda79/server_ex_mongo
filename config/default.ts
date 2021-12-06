export type TDefaultConfig = {
  port: number;
  dbUri: string;
  saltWorkfactor: number;
  accessTokenTtl: string;
  refreshTokenTtl: string;
  publicKey: string;
  privateKey: string;
};

export default {
  port: 1337,
  dbUri: "mongodb://localhost:27017/server_ex_mongo",
  saltWorkFactor: 10,
  accessTokenTtl: "15m",
  refreshTokenTtl: "1y",
  publicKey: `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0Cc0aUy4HlCHhLVj6XmC
qZ6hlAqJi9sATIjvXe4YJj/CQYDK7rna8TACm8KYjGhxNltUKOnYzH742pTwGzmU
o/mMcYQw+6RXL98USe7g/w2BH+5dC25CvUU2dimMFNKdONYB8923O6M34Zqse/B9
zYvqWy3WsRo7aeiwD83pbda7F0KPVmWXdbtcXQe0AWKDokoU6X6NG/noMGxPRNPL
Ddn5TTJULv4SWIme+KuqPeVNSKpt33veZ/Vj1mL0ZO5BFQQ9oBil+6E9LYDaYGXR
qewxT+5EvzZtxLFGqArsgbJz5/6YdAgqOaf/kbWC1R+7ZYpxMj+1CSsuT9m9OHX1
zQIDAQAB
  -----END PUBLIC KEY-----
  `,
  privateKey: `-----BEGIN RSA PRIVATE KEY-----
MIIEogIBAAKCAQEA0Cc0aUy4HlCHhLVj6XmCqZ6hlAqJi9sATIjvXe4YJj/CQYDK
7rna8TACm8KYjGhxNltUKOnYzH742pTwGzmUo/mMcYQw+6RXL98USe7g/w2BH+5d
C25CvUU2dimMFNKdONYB8923O6M34Zqse/B9zYvqWy3WsRo7aeiwD83pbda7F0KP
VmWXdbtcXQe0AWKDokoU6X6NG/noMGxPRNPLDdn5TTJULv4SWIme+KuqPeVNSKpt
33veZ/Vj1mL0ZO5BFQQ9oBil+6E9LYDaYGXRqewxT+5EvzZtxLFGqArsgbJz5/6Y
dAgqOaf/kbWC1R+7ZYpxMj+1CSsuT9m9OHX1zQIDAQABAoIBACkH2Vp6X37GQ/hi
Yxf2Nk3mMZaDfzp8yHHNulVrJgKAJfQQhbAKHcDWRGVctgJTYiGjXhMUiYJB8x7v
JedP8d9ixQ7pTliEPBV5JUAvoNVV3aKkM14Z9XjmqEYhiXXfUFOQR+FAzqooUc8c
VKy3qqy2TFN91Sii8Zw+XFo5Li7SvmZ6rZ1N+vya3bvGQdbcN59aHWkcUOcmorWT
dbijPSsIgWvNeQhUcTZgcG39rG9zv98sv9w8XKT0rhKmdKU5fE4Dtdnv7WMbDaZW
dso51frflLBRwiEv6ayYOp7XEqPBvvT7rk0bMqHslvpSxm0QWzSRyuWyxPePr+/i
4eaiQsECgYEA9vmrBPaxNPu2ztGvpRcuF8y2dZhJJJRaIDEOatbCO+ZnUCVaCaYL
Hq3hFD7OxzcVb8/5+MgkVYAxN2PqR/Fnjt8sgplRMU1JrVWbKOJslHEKndKsekFk
WYktHbooW7eQIz+SrDerLcAQrcJPfSUDrLVkYTj2f2uRe+TJTeZaSKECgYEA18Jf
9pKP2NvlBKEIiskmT+vbC70ssFNlmkbNUyIVNZPzLo3zpCjACEoRzSH1A9IL+OEU
lvU7tvj17CffFu6QgTbDjNI/9rJbJ02noBlsBbtShO+eixbsIXCn/mvf8LcF9A+B
JozZH0pLZPl2yr8vNGkMBiy3bP8OGW7c1jfCQa0CgYAVdx2mEMrWEAqTbyYU8y7O
Yrx4/ANfaoVqxti58HBxRFU2YgixTf0pbXNijxLpvZ/fV/Qh60M9Kycb6VMzbYfS
oxL7RtgHsO/2YLpbk1JclHaXwPe8qHJQVdvV+ZgIYKvmZGAbF7uI/mh0sa628cCg
AiP3TzwdVvwOCJR2cM7oAQKBgGVzoGvwvnLZ8vYaQkoAC2PJI1aBvWGr1TqV0DYm
8JIg31gkp0upXaKIMZajQPJq8fY039mbtlhy+C/zD5NY2dnoRksREcKOWw5AFXHS
glivnD2l7oa4YI/YySV40/P8G3CHWdMmp3FvHcR9CL6M50Vdn6nHnPhDdf2/g1e3
IECBAoGAZ2emZxELENs8FLpEIZVCCu6I9VbIGKvDgcbjB9xTrgUKB4QTkpfhY7a9
0HcQlfmyZ/GPOyX8N3qTnwwMPR2pQUKrxG6MNSaM7iaLu5wPfiVxDjGvl18Ns7q7
dWv8NUNM2PHv5FiiMhlF7ry9DZuAhXcgYS9wwQdICzNwR5TpchE=
-----END RSA PRIVATE KEY-----
  `,
} as unknown as TDefaultConfig;
