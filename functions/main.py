import google.cloud.logging
import google.cloud.functions_v1
from google.cloud import firestore

# Instantiates a client
client = firestore.Client()

# Enables logging for the function
logging_client = google.cloud.logging.Client()
logging_client.setup_logging()

def handle_new_customer(data, context):
    """Triggered by a change to a Firestore document.
    Args:
         data (dict): The event payload.
         context (google.cloud.functions.Context): Metadata for the event.
    """
    trigger_resource = context.resource
    
    doc_id = context.params['documentId']
    document = data

    # Log the data for the newly created document
    print(f'Function triggered by change to: {trigger_resource}.')
    print(f'Document ID: {doc_id}')
    print(f'Document Data: {document}')

    # Here you can now handle the new customer document
    # Perhaps send a welcome email, update some aggregate data, etc.

    print('Function executed successfully!')

# The function to deploy: --entry-point handle_new_customer
