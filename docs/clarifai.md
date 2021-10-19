<div align="center">
  <h1>How to use clarifai</h1>
</div>

## Step 1

To start, you will have to go to the clarifai site in order to create an account there.Once done, you will have to retrieve your API key

## Step 2

For the example I use axios it will therefore be necessary to import the dependency

```shell
npm install axios
```

## Step 3

Once that is done we will be able to tackle the code allowing to consume the clarifai API

```javascript
import axios from "axios";

let data = JSON.stringify({
  "inputs": [
    {
      "data": {
        "image": {
          "base64": "<IMAGE_ENCODED>"
        }
      }
    }
  ]
});

var config = {
  method: 'post',
  url: 'https://api.clarifai.com/v2/models/aaa03c23b3724a16a56b629203edc62c/outputs',
  headers: { 
    'Authorization': 'Key <YOUR_API_KEY>', 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config).then(response => {
  console.log(JSON.stringify(response.data));
}).catch(error => {
  console.log(error);
});

```

To begin with we import axios. Then we define the data by following the diagram provided by clarifai.

Then we will have to manage the configuration of our API call with key note in AUTHORIZATION.

Once done we will be able to execute our API call

If everything works well we need to get an answer like this:

```json
{
    "status": {
        "code": 10000,
        "description": "Ok",
        "req_id": "734d92e3c23249d8af52c046d5008887"
    },
    "outputs": [
        {
            "id": "8cf442067c4b4f898091bd6eeb83f7fe",
            "status": {
                "code": 10000,
                "description": "Ok"
            },
            "created_at": "2021-10-19T10:24:48.530809045Z",
            "model": {
                "id": "aaa03c23b3724a16a56b629203edc62c",
                "name": "general",
                "created_at": "2016-03-09T17:11:39.608845Z",
                "modified_at": "2018-03-06T21:10:24.454834Z",
                "app_id": "main",
                "output_info": {
                    "output_config": {
                        "concepts_mutually_exclusive": false,
                        "closed_environment": false,
                        "max_concepts": 0,
                        "min_value": 0
                    },
                    "message": "Show output_info with: GET /models/{model_id}/output_info",
                    "type": "concept",
                    "type_ext": "concept",
                    "fields_map": {
                        "concepts": "softmax"
                    }
                },
                "model_version": {
                    "id": "aa7f35c01e0642fda5cf400f543e7c40",
                    "created_at": "2018-03-06T21:10:24.454834Z",
                    "status": {
                        "code": 21100,
                        "description": "Model is trained and ready"
                    },
                    "visibility": {
                        "gettable": 50
                    },
                    "app_id": "main",
                    "user_id": "clarifai",
                    "metadata": {}
                },
                "display_name": "General",
                "user_id": "clarifai",
                "input_info": {
                    "fields_map": {
                        "image": "images"
                    }
                },
                "train_info": {},
                "model_type_id": "visual-classifier",
                "visibility": {
                    "gettable": 50
                },
                "description": "v1.3",
                "metadata": {},
                "toolkits": [],
                "use_cases": [],
                "import_info": {}
            },
            "input": {
                "id": "b6802750f95a476b9d6e1f644b538bc4",
                "data": {
                    "image": {
                        "url": "http://i.imgur.com/XmAr3jV.jpg"
                    }
                }
            },
            "data": {
                "concepts": [
                    {
                        "id": "ai_8S2Vq3cR",
                        "name": "chien",
                        "value": 0.9999677,
                        "app_id": "main"
                    },
                    {
                        "id": "ai_gPNNX7LT",
                        "name": "animal de compagnie",
                        "value": 0.9996055,
                        "app_id": "main"
                    },
                    {
                        "id": "ai_LRzQhTHd",
                        "name": "chiot",
                        "value": 0.9994991,
                        "app_id": "main"
                    },
                    {
                        "id": "ai_M6pVRDsX",
                        "name": "canin",
                        "value": 0.9990233,
                        "app_id": "main"
                    },
                    {
                        "id": "ai_4CRlSvbV",
                        "name": "mignon",
                        "value": 0.998632,
                        "app_id": "main"
                    },
                    {
                        "id": "ai_SzsXMB1w",
                        "name": "animal",
                        "value": 0.99639386,
                        "app_id": "main"
                    },
                    {
                        "id": "ai_N6BnC4br",
                        "name": "mammifère",
                        "value": 0.9955799,
                        "app_id": "main"
                    },
                    {
                        "id": "ai_xWCNmTbf",
                        "name": "adorable",
                        "value": 0.99250484,
                        "app_id": "main"
                    },
                    {
                        "id": "ai_3qZMGkQ9",
                        "name": "pedigree",
                        "value": 0.9924493,
                        "app_id": "main"
                    },
                    {
                        "id": "ai_5sqbqWHm",
                        "name": "domestique",
                        "value": 0.9922506,
                        "app_id": "main"
                    },
                    {
                        "id": "ai_bDG4NTgt",
                        "name": "de race",
                        "value": 0.99193007,
                        "app_id": "main"
                    },
                    {
                        "id": "ai_ks3RZ5zc",
                        "name": "chiot",
                        "value": 0.99049485,
                        "app_id": "main"
                    },
                    {
                        "id": "ai_H40bd16J",
                        "name": "amitié",
                        "value": 0.9902395,
                        "app_id": "main"
                    },
                    {
                        "id": "ai_HkqZwBbr",
                        "name": "petit",
                        "value": 0.98850095,
                        "app_id": "main"
                    },
                    {
                        "id": "ai_vhVFqkx3",
                        "name": "race",
                        "value": 0.9854649,
                        "app_id": "main"
                    },
                    {
                        "id": "ai_Q4tsR9mS",
                        "name": "studio",
                        "value": 0.98540616,
                        "app_id": "main"
                    },
                    {
                        "id": "ai_TJ9wFfK5",
                        "name": "portrait",
                        "value": 0.9809513,
                        "app_id": "main"
                    },
                    {
                        "id": "ai_kMfQ8z5w",
                        "name": "retriever",
                        "value": 0.97645074,
                        "app_id": "main"
                    },
                    {
                        "id": "ai_tDN1jkWB",
                        "name": "golden retriever",
                        "value": 0.97516465,
                        "app_id": "main"
                    },
                    {
                        "id": "ai_wqgGDjK4",
                        "name": "fourrure",
                        "value": 0.9730969,
                        "app_id": "main"
                    }
                ]
            }
        }
    ]
}
```

This is the complete answer but what interests us is the outputs> data> concepts part

this part : 

```json
"data": {
  "concepts": [
    {
        "id": "ai_8S2Vq3cR",
        "name": "chien",
        "value": 0.9999677,
        "app_id": "main"
    },
    {
        "id": "ai_gPNNX7LT",
        "name": "animal de compagnie",
        "value": 0.9996055,
        "app_id": "main"
    },
    {
        "id": "ai_LRzQhTHd",
        "name": "chiot",
        "value": 0.9994991,
        "app_id": "main"
    },
    {
        "id": "ai_M6pVRDsX",
        "name": "canin",
        "value": 0.9990233,
        "app_id": "main"
    },
    {
        "id": "ai_4CRlSvbV",
        "name": "mignon",
        "value": 0.998632,
        "app_id": "main"
    },
    {
        "id": "ai_SzsXMB1w",
        "name": "animal",
        "value": 0.99639386,
        "app_id": "main"
    },
    {
        "id": "ai_N6BnC4br",
        "name": "mammifère",
        "value": 0.9955799,
        "app_id": "main"
    },
    {
        "id": "ai_xWCNmTbf",
        "name": "adorable",
        "value": 0.99250484,
        "app_id": "main"
    },
    {
        "id": "ai_3qZMGkQ9",
        "name": "pedigree",
        "value": 0.9924493,
        "app_id": "main"
    },
    {
        "id": "ai_5sqbqWHm",
        "name": "domestique",
        "value": 0.9922506,
        "app_id": "main"
    },
    {
        "id": "ai_bDG4NTgt",
        "name": "de race",
        "value": 0.99193007,
        "app_id": "main"
    },
    {
        "id": "ai_ks3RZ5zc",
        "name": "chiot",
        "value": 0.99049485,
        "app_id": "main"
    },
    {
        "id": "ai_H40bd16J",
        "name": "amitié",
        "value": 0.9902395,
        "app_id": "main"
    },
    {
        "id": "ai_HkqZwBbr",
        "name": "petit",
        "value": 0.98850095,
        "app_id": "main"
    },
    {
        "id": "ai_vhVFqkx3",
        "name": "race",
        "value": 0.9854649,
        "app_id": "main"
    },
    {
        "id": "ai_Q4tsR9mS",
        "name": "studio",
        "value": 0.98540616,
        "app_id": "main"
    },
    {
        "id": "ai_TJ9wFfK5",
        "name": "portrait",
        "value": 0.9809513,
        "app_id": "main"
    },
    {
        "id": "ai_kMfQ8z5w",
        "name": "retriever",
        "value": 0.97645074,
        "app_id": "main"
    },
    {
        "id": "ai_tDN1jkWB",
        "name": "golden retriever",
        "value": 0.97516465,
        "app_id": "main"
    },
    {
        "id": "ai_wqgGDjK4",
        "name": "fourrure",
        "value": 0.9730969,
        "app_id": "main"
    }
  ]
}
```
What interests us here is the **name** as well as the **value** which acts as a ratio.
