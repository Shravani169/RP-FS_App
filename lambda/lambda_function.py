    import json
import boto3

# Initialize the DynamoDB client
dynamodb = boto3.client('dynamodb', endpoint_url='http://localhost:8787' )
table_name = 'newTable'

def lambda_handler(event, context):
    method = event['requestContext']['http']['method']
    response = {"statusCode": 200, "body": ""}

    if method == "GET":
        # Read operation
        item_id = event['pathParameters']['id']
        response['body'] = json.dumps(get_item(item_id))
    elif method == "POST":
        # Create operation
        request_body = json.loads(event['body'])
        response['body'] = json.dumps(create_item(request_body))
    elif method == "PUT":
        # Update operation
        item_id = event['pathParameters']['id']
        request_body = json.loads(event['body'])
        response['body'] = json.dumps(update_item(item_id, request_body))
    elif method == "DELETE":
        # Delete operation
        item_id = event['pathParameters']['id']
        response['body'] = json.dumps(delete_item(item_id))

    return response

def get_item(item_id):
    try:
        response = dynamodb.get_item(TableName=table_name, Key={'ID': {'S': item_id}})
        item = response.get('Item')
        return item if item else {"message": "Item not found"}
    except Exception as e:
        return {"message": f"Error: {str(e)}"}

def create_item(data):
    try:
        response = dynamodb.put_item(TableName=table_name, Item=data)
        return {"message": "Item created successfully"}
    except Exception as e:
        return {"message": f"Error: {str(e)}"}

def update_item(item_id, data):
    try:
        response = dynamodb.put_item(TableName=table_name, Item={'ID': {'S': item_id}, **data})
        return {"message": "Item updated successfully"}
    except Exception as e:
        return {"message": f"Error: {str(e)}"}

def delete_item(item_id):
    try:
        response = dynamodb.delete_item(TableName=table_name, Key={'ID': {'S': item_id}})
        return {"message": "Item deleted successfully"}
    except Exception as e:
        return {"message": f"Error: {str(e)}"}