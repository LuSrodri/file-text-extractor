# File Text Extractor

An API to provide resource to extract texts and structured data from file such as **"application/pdf", "image/gif", "image/tiff", "image/jpeg", "image/png", "image/bmp" and "image/webp"**.

## How to use in local environment

On a computer with Node.js in 18 version installed, follow the below steps.

- Create a .env file following the .env-example;
- Run `npm ci` command;
- Run `npm start` command and;
- Enjoy it!

## Endpoints

### POST `/file-text-extractor`

Request must be a **Multipart form** with **"file"** attribute thats contains a file with follow mimetype: **application/pdf, image/gif, image/tiff, image/jpeg, image/png, image/bmp and image/webp** and a **"data"** attribute thats contains a structure form of the return data.

#### See an example of request:

```multipart/form-data
--boundary123
Content-Disposition: form-data; name="file"; filename="document.pdf"
Content-Type: application/pdf

Lucas Santos Rodrigues\n23 years old\n

--boundary123
Content-Disposition: form-data; name="data"

{
    "name": "extract_name_age_info",
    "description": "Get the name and age information from the input text",
    "parameters": {
        "type": "object",
        "properties": {
            "name": {
                "type": "string",
                "description": "Name of the person"
            },
            "age": {
                "type": "number",
                "description": "Age of the person"
            }
        }
    }
}
--boundary123--
```

#### Response example:

```json
{
	"structuredInformation": {
		"name": "Lucas Santos Rodrigues",
		"age": 23
	},
	"rawText": "Lucas Santos Rodrigues\n23 years old\n"
}
```

## Example of Use Cases

One of an example of use case can be a needed to extract informations from a curriculum.

#### See an example request:

```multipart/form-data
--boundary123
Content-Disposition: form-data; name="file"; filename="document.pdf"
Content-Type: application/pdf

TRUNCAD CONTENT

--boundary123
Content-Disposition: form-data; name="data"

{
    "name": "extract_curriculum_info",
    "description": "Get the curriculum information from the input text",
    "parameters": {
        "type": "object",
        "properties": {
            "name": {
                "type": "string",
                "description": "Name of the person"
            },
            "age": {
                "type": "number",
                "description": "Age of the person"
            },
            "summary": {
                "type": "string",
                "description": "Full summary of the person"
            },
            "email": {
                "type": "string",
                "description": "Email of the person"
            },
            "phone": {
                "type": "string",
                "description": "Phone of the person"
            },
            "address": {
                "type": "string",
                "description": "Address of the person"
            },
            "educations": {
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
                        "school": {
                            "type": "string",
                            "description": "School of the education"
                        },
                        "degree": {
                            "type": "string",
                            "description": "Degree of the education"
                        },
                        "start_date": {
                            "type": "string",
                            "description": "Start date of the education"
                        },
                        "end_date": {
                            "type": "string",
                            "description": "End date of the education"
                        },
                        "grade": {
                            "type": "string",
                            "description": "Grade of the education"
                        },
                        "activities": {
                            "type": "string",
                            "description": "Activities of the education"
                        },
                        "description": {
                            "type": "string",
                            "description": "Full description of the education"
                        }
                    }
                }
            },
            "experiences": {
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
                        "company": {
                            "type": "string",
                            "description": "Company of the experience"
                        },
                        "position": {
                            "type": "string",
                            "description": "Position of the experience"
                        },
                        "start_date": {
                            "type": "string",
                            "description": "Start date of the experience"
                        },
                        "end_date": {
                            "type": "string",
                            "description": "End date of the experience"
                        },
                        "description": {
                            "type": "string",
                            "description": "Full description of the experience"
                        }
                    }
                }
            },
            "skills": {
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
                        "name": {
                            "type": "string",
                            "description": "Name of the skill"
                        },
                        "level": {
                            "type": "string",
                            "description": "Level of the skill"
                        }
                    }
                }
            },
            "languages": {
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
                        "name": {
                            "type": "string",
                            "description": "Name of the language"
                        },
                        "level": {
                            "type": "string",
                            "description": "Level of the language"
                        }
                    }
                }
            }
        }
    }
}
--boundary123--
```

#### An example response:

```json
{
	"structuredInformation": {
		"name": "Lucas Santos Rodrigues",
		"email": "lucassrodri08@gmail.com",
		"address": "Sorocaba, S\\u00e3o Paulo, Brasil",
		"skills": [
			{
				"name": "Python",
				"level": "Not specified"
			},
			{
				"name": "AWS",
				"level": "Not specified"
			},
			{
				"name": "Empreendedorismo",
				"level": "Not specified"
			}
		],
		"languages": [
			{
				"name": "Portugu\\u00eas",
				"level": "Native or Bilingual"
			},
			{
				"name": "English",
				"level": "Professional Working"
			}
		],
		"educations": [
			{
				"school": "Facens | Faculdade de Engenharia de Sorocaba",
				"degree": "Bacharelado em Engenharia, Engenharia de Computa\\u00e7\\u00e3o",
				"start_date": "janeiro de 2019",
				"end_date": "dezembro de 2023"
			}
		],
		"experiences": [
			{
				"company": "Y\\u00e1gua",
				"position": "Engenheiro de software j\\u00fanior",
				"start_date": "dezembro de 2023",
				"end_date": "Present"
			},
			{
				"company": "Centro Universit\\u00e1rio Facens",
				"position": "Monitor Acad\\u00eamico",
				"start_date": "setembro de 2023",
				"end_date": "dezembro de 2023"
			},
			{
				"company": "FIT - Instituto de Tecnologia",
				"position": "Estagi\\u00e1rio de desenvolvimento web",
				"start_date": "abril de 2022",
				"end_date": "junho de 2023"
			},
			{
				"company": "Centro Universit\\u00e1rio Facens",
				"position": "Monitor Acad\\u00eamico",
				"start_date": "agosto de 2022",
				"end_date": "novembro de 2022"
			},
			{
				"company": "Yamatec",
				"position": "Auxiliar de produ\\u00e7\\u00e3o",
				"start_date": "junho de 2019",
				"end_date": "dezembro de 2020"
			}
		]
	},
	"rawText": TRUNCAD
}
```

Another use of case would be a needed to extract informations from a medical exams document.

#### See an example request:

```multipart/form-data
--boundary123
Content-Disposition: form-data; name="file"; filename="document.pdf"
Content-Type: application/pdf

TRUNCAD CONTENT

--boundary123
Content-Disposition: form-data; name="data"

{
    "name": "extract_medical_exams_info",
    "description": "Get the medical exams information from the input text",
    "parameters": {
        "type": "object",
        "properties": {
            "laboratory_name": {
                "type": "string",
                "description": "Name of the laboratory"
            },
            "name": {
                "type": "string",
                "description": "Name of the person"
            },
            "age": {
                "type": "number",
                "description": "Age of the person"
            },
            "genre": {
                "type": "string",
                "description": "Genre of the person"
            },
            "email": {
                "type": "string",
                "description": "Email of the person"
            },
            "phone": {
                "type": "string",
                "description": "Phone of the person"
            },
            "address": {
                "type": "string",
                "description": "Address of the person"
            },
            "date": {
                "type": "string",
                "description": "Date of the medical exams realization"
            },
            "medical_exams": {
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
                        "name": {
                            "type": "string",
                            "description": "Name of the medical exam"
                        },
                        "description": {
                            "type": "string",
                            "description": "Description of the medical exam"
                        },
                        "Result": {
                            "type": "number",
                            "description": "Result of the medical exam"
                        },
                        "Unit of measurement": {
                            "type": "string",
                            "description": "Unit of measurement of the medical exam result"
                        }
                    }
                }
            }
        }
    }
}
--boundary123--
```

#### An example response:

```json
{
	"structuredInformation": {
		"laboratory_name": "BIOLIFE",
		"name": "LUCAS SANTOS RODRIGUES",
		"age": 23,
		"genre": "Masculino",
		"date": "05/01/2024",
		"medical_exams": [
			{
				"name": "COLESTEROL TOTAL",
				"Result": 217,
				"Unit of measurement": "mg/dL"
			},
			{
				"name": "COLESTEROL - HDL",
				"Result": 67,
				"Unit of measurement": "mg/dL"
			},
			{
				"name": "TRIGLICERIDEOS",
				"Result": 61,
				"Unit of measurement": "mg/dL"
			}
		]
	},
	"rawText": TRUNCAD
}
```

A **File Text Extractor** proves invaluable in various scenarios, automating the extraction of crucial details from legal contracts, invoices, and academic records. This versatile tool streamlines processes such as survey and form data analysis, facilitating decision support in business. Its applications extend to the extraction of medical information from prescriptions and laboratory reports, aiding in health record organization. Whether categorizing documents, analyzing resumes, or managing financial data from invoices and receipts, the File Text Extractor serves as an indispensable asset. Customization for specific use cases enhances its functionality, ensuring it meets unique requirements while upholding data security and privacy standards across diverse industries.

## How it works

We use here two technologies to provide the resources. The first one is a Google Cloud Platform technologies call Document AI, used to extract all text information given a file or image. The second one is the OpenAI api known as "Function Calling" where we passing the raw text and get it back in structured way.