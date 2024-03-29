extract_curriculum_info = {
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

extract_medical_exams_info = {
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
