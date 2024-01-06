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
                "description": "Summary of the person"
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
                            "description": "Description of the education"
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
                            "description": "Description of the experience"
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