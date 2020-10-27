export default {
  blockTemplates: [
    {
      id: 1,
      title: 'Блок заголовок с кнопкой',
      template(data) {
        return `
              <h1>${data.title}</h1>
              <h3>${data.description}</h3>
              <button>${data.buttonValue}</button>
            `;
      },
      defaultValues: {
        title: {
          type: 'string', // Для реализации различных обработчиков значения, например даты цвета и тд
          label: 'Главный заголовок',
          value: 'Первая заглавная страница сайта!',
        },
        description: {
          type: 'string',
          label: 'Описание к заголовку',
          value: 'Описание поменьше... lorem*10',
        },
        buttonValue: {
          type: 'string',
          label: 'Текст кнопки',
          value: 'Кликни меня!',
        },
      }
    },
    {
      id: 4,
      title: 'Блок карточки товара',
      template(data) {
        return `
              <img src="${data.imageURL}" alt="#">
              <h3>${data.productName}</h3>
              <strong>Цена: ${data.price} ${data.currency}</strong>
              <span>Количество: ${data.count}</span>
              <p>${data.description}</p>
            `;
      },
      defaultValues: {
        productName: {
          type: 'string',
          label: 'Название товара',
          value: 'Пряники 10 кг',
        },
        count: {
          type: 'number',
          label: 'Количество',
          value: '10',
        },
        currency: {
          type: 'list',
          label: 'Валюта',
          value: '$',
          variants: ['$', 'Р', 'EUR'], // Варианты для выбора валюты в селекте,
        },
        price: {
          type: 'number',
          label: 'Цена',
          value: '220',
        },
        imageURL: {
          type: 'image',
          label: 'Изображение',
          value: 'data:image/jpeg;base64,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',
        },
        description: {
          type: 'string',
          label: 'Описание к товару',
          value: 'Стандартное описание товара может быть долгим, но вы можете поменять это...',
        },
      }
    },
    {
      id: 2,
      title: 'Блок изображения с описанием',
      template(data) {
        return `
              <img src="${data.imageURL}" alt="#">
              <p>${data.description}</p>
            `;
      },
      defaultValues: {
        imageURL: {
          type: 'image',
          label: 'Изображение',
          value: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMQEhAQEBAPDxAPEA0PEA8PDw8PDw8QFREWFhUVFRUYHSggGBolGxUVITEhJSktMC4uFx8zODM4NygtLisBCgoKDg0NFRAQFy0dHh0tKzcwKystLSsuLTcrLS8rLS0tLSsrLS0tKy0rLSsrLS0rLS0tLSsrLSsrKystLS0tK//AABEIAOEA4QMBEQACEQEDEQH/xAAbAAADAQADAQAAAAAAAAAAAAAAAQIDBAUGB//EAD0QAAMAAgAEAgcFBQUJAAAAAAABAgMRBBIhMQUGEyJBUWFxgRQjkaGxBzJSwcIkYpLR4RVCQ1NkcoKi8P/EABoBAQEAAwEBAAAAAAAAAAAAAAABAgMEBQb/xAAwEQEAAgIBAwEFBwQDAAAAAAAAAQIDEQQSITFBBRMiUWEUI4GRobHwccHR4RUy8f/aAAwDAQACEQMRAD8A5FVs8l9gkAAALqNBEBVKvYBIAAAVE7CSkKAAAAAABgIAAAAAAAAAAAAAAAKhdQHkQSEBTbAQDAQGiS0EZhQAAAAA0AMBAAAAAAAAAAAAAAAAAXkIIKABpbAKnRAIou6WgjMKAACuV9wJAqK0ElIUAADSAGgEAAAAAAAAAAAAAAAFzICqdAEPQDuiCCgAaQFVATaAq1fQIgKAACojYTaQoAAAAAAAAAAAAAAAAAdICprQCqtgLQCAuEA7QGYFO9kElAAAaKVoIzCgAAAABr4gDAQAAAAAAAAAAANsB8oCaA0jsETkCpTAHWwBLYA50ASBpb6ERkVQAAPlAQFxWvYElAUAAAAAAAAAAAAAADA1CM7CkmANgVMgKp0A8bAdsIzCgBpAVUEEFF8/QJpAUAAFTOwJAaYCAAAAAAAAAAG2AdQBIDTQRFIKqaCJthS0AgLiQHcgQmBTsCAAAA05OgRmFNMBAAAA0AgAAAAAAAqEBoEZvowquYIinsKfIAmgNEETYUprQBVbASWwBoAnuBpfYiMiqewEA9AICpa67CJCgAAAAAAAABp6ArnAlLYFcgQl3CtAjOwoVAJsClACpaArGwDIwjMKAGkA6jQEgXz9NBEBQAANIBAAAAAAABcyQNyEKGFWEZUyqe2QJLZRpoIikFWmETbCoAALiQC5AlPQFVeyCCgAAL5Omwm0BTTAQAAAAAAAXDIKbCM0thTaYDhAUEQ+jCr5ioimFHKAgNEgibQUprQBVbASQA0ASBeRBGYUbAAAAAaAQAAAAFKSAcgVARyvD+BviLWPEuamm+rSSS7tv6mVKTadQ15ctcVeq3hp4x4Y+Eucd3N04V1yb1O20lt9+xlkp0TqWPHzxmrNojUbdr5Qz8LPpXxLx83qqFlnmnXXeumt9jZgmkb6nLzq57dMYt/g6jxvNjyZ8tYZU4m1yqVyrSlJtL2babNWSYm0zHh1cet64qxee7hchg3lPco0CM7ChWAm9gNSAmtAXjAMgGYAAAfQPKvh+KOD9LlxY7b9Ll3cTT5V0STa7er+Z24axGPcw8Pm5b25HRW0x4js8A3vr7+vuOJ7h83TWgiQoAAAAAANURBQGarQV9N8s8JwylXg5KyTjiMtzVP1mk336LbWz0cNaRG6+XznMyZpnWTtG+0MvEl4fkyVWesTyL1a3ktNcvTWk9GN/dTPxeWeL7XWkRSJ1/SHD8P8E4V8Pk4i8Kc74nJPrZFrFNVy+33Tv6mNcdOibTHzbcvJzxmjHFvlHp5lw/Kfl/DmwvPnTe6vU8zmVM+16699+0xw4a2r1WbebzMmPJ0Udtwn+zbpY4nBVV0ScN8z922bK+5mdRpzX+21jqtM6HHeDcBw79JmiYVPUzVZHG17pTFseKveUx8nlZY6aTvX9G3B8FwHEzSxY8NKelcsuKnfb3NFrXFeO0McmXlYZjqmYeNrwGr4y+FxvpNbdvry49Ktv46aXzOX3W8k1h632uI48Zbev7vS5+D8P4LljLKyZGtvmTy2/jrtJ0TXFj7S8+uTl8jc0nUfkriPB+E4vBeTh4mKSvlqE4auV2qf/u4nHjvXdUryORgyxXJO/wBWHE+C8O+C9PjxJZHgnIq5rfXSb6b17zG2Knu+qI9GdOVljk+7tbtvTzHgPh32nPGPXqp82R+6F3X17fU58VOu0Q9LlZvdYpt6+j0PnHwPBgwLJhxqK9JEtqrfRp+9nRnxVrXcQ8/gcrLky9N532dX5O8GXE5KrLPNixrqttc1vstr6v8AA1YMfXPfw6efyZw0iKz3l2seXMPEcRaxz6LhsH3dOap1ly96Sbb0l2Nvua2vOu0Q5p5mTFijqndrfpDfLxHhmGvRvHDcvldejrIk/bunvZZthrOtMIpzckdW5/PX6OJ5w8Dw4sU8RglR60pzO+WlXZpez6e8xz4qxXqq28DlZL3nHknb0jxYsXCTjz0oxrFGO26c72kmk116vfY6NRXHq3h53Ve/Im2ONzvcOB4di8Ozv0WLHhqkm+Vw1TS9qb6s11jFbtEN+W3Mxx1XmYeV83+EzwuZLHtY8k80y23ytPTW37Dnz44pbs9Pg8i2bHPV5h2/h3lnh+J4aHiyffcqd2qdJW11mo9iX0NlcNLUjU93Ll5ubFmmLR8Py/2814r4Rl4atZZ0m/VtdYr5P+Rz3x2pPd6OHkUzRusuAYtwAAACk2QJsC0gj6F5LxrFwlZH05qyZX/2ytf0/md/Hjpx7eD7Qt18iKx6ah8/rK7bp/vVTp/Nvf8AM4J7y96IisREej6F4+/s/h/J2+7x4fx0n+Wzvy/Di08Djfe8vq+syK/s3hvur7P+F5P9a/Iv/TD+BH33N+m/2/8AHjfLGF3xWCfYr5n8pTr+RyYY3eHr8y3TgvP87u//AGh5/WwY/cryP66S/Rm7lT4hw+yqdr2b/s8wanPk/iqIX/im/wCovFjtMsPatvipX5bc3yvCvLxvEd3ed45f9yF/qvwNmHva1vq0cyenHix/KN/m4/H5fDcmS7y2qyb1T5uIXVdNdOnsMbThmdz/AHbMVebSkRSO34GvGeCwYMuPh8iW5yOZ1lbdudd6XyHvMdazFZT7NycuWtskfL5NfBn6TwzX/T8Rj/DnlfoXH3w/hLHkfDzd/WP7S4Xl3CuC4PJxeRfeZJ5pT6PXbHP1b39fgY4o93jm8+rdyrTyORXFXxH8ly/MTrNwGOtc12uFrp/vVXL/ADZll3bFH4NfE1Tl2jxEdX6FxFrwzguWdemvt8ctLq/kl+iE/c4/qlYnmcnc+I/b/bneDTHDcHjeR8srGryV13u+rfTrvbM6arjjbTnm2XkT09532/B0jjwl+1f4uJNOsH827Orn/wA6XJ8U8SwcT9m4bBavefDtKbXLjjb9q+Ble9b9Naz6teHDlw9eW8a7T+rL9ovEax4cX8V1bXwla/qJyp7RDP2VTdrW+TpvIeF1xSr2Y8eSn9dSl/7fkauPG7uv2lbWDXzmG37QM6riJhf8PGk/g6e/01+JeTO76+TD2ZTWKZ+cum8FnO8q+y8/pOnWOyX97fTXzNWPq38Pl18icXR974/nh9LzOVw/9ueH91el/wCXv4b9vyO+ddHxvnq7979xv6fN8s470fpL9Dzei5nyc373L8Tzra3OvD6XH1dEdfn1YEZgAA1Am0A1RB9L8vejzcHGJV0eJ47Utc0t7T/U9HFq2OIfOcrrx8mbTHruHR8T5Ww4KwffVdXnxTy1yTKhbqm18pa+ppnBWsx39XZTnZMtb/DqIif8OV53zrI+FwTUtZMydaaaXVSt/wCJ/gZcid9Nfq1+z6zSMmSY8R/v+y/PPFysEY4qXz2uktP1ZW/10OTaOiIhPZuOZyzaY8R+7qvIcT6a8lOVyY9LmaXWn/kn+Jr40R1TLq9pzPuorHrLheceLWTi709zExjTXVdFt/nTMM87vLbwKdOCPq9N5ezRw/Ac7qebkzZnPMtt9eVa+Sk6MUxXFt53KrbLyta7docHyF4rCm8GSlNu/SS6ele11W/f0/Mx4141NZbvaWC0zF6x2cni/JOK7q1muJqnTnUtLb30fuMrcaszvbXT2netYrNYnTzPmPwzFw2SIxZHk3Dqm6mmq326Loc+WlaTERL0eJmvlrNrxp6zyXmh8LyXUrV5Zaqkuj6/zOnjzHu9S8v2hW3v9xHpDpfPfiiu44fG1yYtVXL+67a6L6L9fgaeRfc9Mejs9m4JrWclvMvV+DZcb4bhVVR6uDh3p1PSljn9DpxzHRXfyh5nIreM2TUT5n93gvNXi32rM3L+6x7jGvY1vrX1/RI482Trt9Ht8Lj+5x9/M+f8PZeEcTi43hFhqtP0c4skJpXLS1tb+SezqpauSmnkZ6ZOPn64j13Drn5Hwz1viLU/LHL/ABZh9mrHmXR/ymSfFI/V1vlnFix8dfryoxPMsVVU+t15Vp+3o2a8UVjLPfw6OXa9uLHbvOt/u9J495dnjajJ6ZxyzyJJTc9299+/X8kb8mGMk728/jcyePWa9O9seFx8N4XjtvJz5L7716S2u0qV2X+ZIimGPLK9s3MvGo1Efk8Bx/FVmyXlv97JTp/D3L6LS+hxWtNpmZe7jxxjpFY9HrOA80YOH4aJxYvvuVK4S5Zdpdbqvbvv7zprnrWkaju8vJwcuXNM2t8P87aeZ8T8Uy8TXNltv+GV0ifkjnvebTuXo4cFMUapDhGLcYCAAL5iBN7KHykC7e1/ToUXsBV2IJmtAN0ApkBuACANOZ+9/iypqGL7hT5wEBXIQS0UaRQROSt+1v6giEBTVP3v8WE1AS2FDWgEBV1sIkKAAAA05SIldGFWETYUlRQm9gWpIFUgOWENsDNfAKbpgEIotoIzXRhWmwjOmFIAAuYIJpaKCa0AU9gIAAAG1oBAAGpEZ0wp9QEgNAiLQVSZQqogSQCewLlBDaAiWVVcwRHcKHIAgNdBGTCmq0AmwEAAVPxAVfABAAAAAVoAggsIiu4VXMETTCjlKE0BoRCoCZoKboBTJQOQHAFBGYU+cCQK5AJA0hoIhhSAAAAAAADQgjZRXMQSuoFcoQl3CrAmyhKyAb2BSkIVSFOWENlGaYUOgCVsCnAEIDXmQRkFAABUzsCQGnoAbAQAA3RA5QD0ApAsIzphT2wEupRoREUgq0whWwJWwpMouEEFICZYVTsIzCgAA05Am2YU1WgEAAAAgHoCmiBSwG2BJQ9MgIQFhEPoyqpMgmmAcgCaA0CFZRM0FOqAlIAaAcdwLrsEZBT5gEAAAFTr2/QCQAAApsgSQA0BUgUEZp6Cq5gJXUorkIFPcDQIiwoVgKq2UNQAqnQFQEFgZhTbASApzoCQL5umgiAoAAAAAbRBaATAlMBugCUA3IQoKqyIin1CjmAF1AvQRFLQVaZUTbCoAAKidgFzoBJgVV7CICgAArl6bAkB7AQFUyBIoGwLSIhUgCWFNsIhFU3sgcICwjPswq9hEUyqOVgSBqkERaCia0AVWwJAAGgKudBEBQAAAAA0BZArQAqCCmFSpAGii5IGERL0FVzBEdwquQBT3KNAjOwoVAJsAUgDQFYwkjICEBQAAAAAwEBVED5ghN7CnygS0BYBRRM1ogbsBTIDcAEAWEZV3Kp84CArkAloDSWERbCpAAGlsAa0AgKqtgSAAADogRQ5INAibCnICsCQEUayRDAzjuFWyoyCmwHHcDQIzvuFSAAAABeLuEkZe4IQFAAAAAH/2Q==',
        },
        description: {
          type: 'string',
          label: 'Описание к Изображению',
          value: 'Стандартное описание изображение может быть долгим, но вы можете поменять это...',
        },
      }
    },
  ],
  newPage: {
    id: 0,
    title: 'Новая страница',
    previewImg: '/logo.png',
    blocks: [
      {
        id: 0,
        index: 0,
        blockTemplateID: 1,
        values: {
          title: 'Первая заглавная страница сайта!',
          description: 'Описание поменьше... lorem*10',
          buttonValue: 'Кликни меня!',
        }
      }
    ]
  },
  allPages: [
    {
      id: 1,
      title: 'Первая страница сайта',
      previewImg: '/logo.png',
      blocks: [
        {
          id: 100510,
          index: 0,
          blockTemplateID: 1,
          values: {
            title: 'Первая заглавная страница сайта!',
            description: 'Описание поменьше... lorem*10',
            buttonValue: 'Кликни меня!',
          }
        },
        {
          id: 122,
          index: 1,
          blockTemplateID: 4,
          values: {
            productName: 'Пряники 10 кг',
            count: '10',
            currency: '$',
            price: '220',
            imageURL: 'data:image/jpeg;base64,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',
            description: 'Стандартное описание товара может быть долгим, но вы можете поменять это...',
          }
        }
      ]
    },
    {
      id: 32,
      title: 'Вторая страница сайта',
      previewImg: '/logo.png',
      blocks: [
        {
          id: 100505,
          index: 0,
          blockTemplateID: 1,
          values: {
            title: 'Первая заглавная страница сайта!',
            description: 'Описание поменьше... lorem*10',
            buttonValue: 'Кликни меня!',
          }
        }
      ]
    },
    {
      id: 121,
      title: 'Пятисотая страница',
      previewImg: '/logo.png',
      blocks: [
        {
          id: 1005011,
          index: 0,
          blockTemplateID: 1,
          values: {
            title: 'Первая заглавная страница сайта!',
            description: 'Описание поменьше... lorem*10',
            buttonValue: 'Кликни меня!',
          }
        },
        {
          id: 10052011,
          index: 1,
          blockTemplateID: 2,
          values: {
            imageURL: 'data:image/jpeg;base64,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',
            description: 'Стандартное описание изображение может быть долгим, но вы можете поменять это...',
          }
        }
      ]
    },
  ],
}
