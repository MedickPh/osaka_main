
import axios from "axios";

export  function getRulesForCurrentCountry (countryCode: string)  {    
    try {
        const response = {
            "title_en": "awaw",
            "title_ja": "AWAWAW",
            "isTable": true,
            "table": [
                {
                    "type": "headers",
                    "headers_en": [
                        "awaw",
                        "awaw"
                    ],
                    "headers_ja": [
                        "awd awd awd awd a",
                        "awd awd aw dawd awd "
                    ]
                },
                {
                    "type": "line",
                    "text_en": [
                        "wadvdawv awd awdawd awd",
                        "aw dawd awd awd aw daw d"
                    ],
                    "text_ja": [
                        "1231231 131 3 13 ",
                        "123 123 123 "
                    ]
                },
                {
                    "type": "line",
                    "text_en": [
                        "wadadawd",
                        ""
                    ],
                    "text_ja": [
                        "",
                        "13414144"
                    ]
                },
                {
                    "type": "line",
                    "text_en": [
                        "",
                        ""
                    ],
                    "text_ja": [
                        "",
                        "12312312 123 123 1"
                    ]
                },
                {
                    "type": "line",
                    "text_en": [
                        "",
                        "awveaw eaw  f aw aw"
                    ],
                    "text_ja": [
                        "",
                        ""
                    ]
                }
            ],
            "main_block": [
                {
                    "type": "block",
                    "title_en": "wqeqe qwe qwe ",
                    "title_ja": "123 123 13 1",
                    "text_en": "qwe qwe qwe qwe qe ",
                    "text_ja": "123 13 13 1"
                },
                {
                    "type": "block",
                    "title_en": "qwe qwe qe qe ",
                    "title_ja": "123 13 13 1",
                    "text_en": "qwe qe qwe qe qw ",
                    "text_ja": "123 13 13 "
                },
                {
                    "type": "list",
                    "title_en": "qwe q eqwe qwe ",
                    "title_ja": "1 3123 13 ",
                    "lines": [
                        {
                            "text_en": "wqe qwe qw eq we qwe q",
                            "text_ja": "123 13 12 3"
                        }
                    ]
                }
            ],
            "references": [
                {
                    "type": "title",
                    "text_en": "awd awd aw dawd ",
                    "text_ja": "123 13 13 123 "
                },
                {
                    "type": "link",
                    "link": "https://www.google.com.ua/?hl=ru",
                    "text_en": "awd awd awd awd a",
                    "text_ja": "123 13 123 1 23"
                }
            ]
        }
        // const response = await axios.get(
        //     `http://13.231.117.234/api/blog_one?id=${countryCode}`,
        //     {
        //         headers: {
        //             Authorization: token,
        //         },
        //     }
        // );
        return response
    } catch (error) {
        console.error((error as Error).message);
        return 'error'
    }
}