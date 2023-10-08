from firebase_admin import firestore

# Initialize Firestore
db = firestore.client()

def add_customer(data):
    # data is a dictionary containing customer information
    customer_id = data['id']
    doc_ref = db.collection('customers').document(customer_id)
    doc_ref.set(data)

