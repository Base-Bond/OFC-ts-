import type { LifecycleStatus } from '@coinbase/onchainkit/checkout';
import { Checkout, CheckoutButton, CheckoutStatus } from '@coinbase/onchainkit/checkout';

function CheckoutComp() {

    const statusHandler = async (status: LifecycleStatus) => {
        const { statusName, statusData } = status;
        switch (statusName) {
            case 'success':
                // handle success
                const { chargeId } = statusData;
                // use the charges api to verify the chargeId
                const options = {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'X-CC-Api-Key': 'your_api_key_here' // Replace this with your Coinbase Commerce API Key
                    }
                };
                const response = await fetch(`https://api.commerce.coinbase.com/charges/${chargeId}`);
        }
    }

    return (
        <Checkout onStatus={statusHandler} productId='98fd9ff9-efd3-' >
            <CheckoutButton coinbaseBranded /> // set coinbaseBranded for branding
            <CheckoutStatus />
        </Checkout>
    )
}

export default CheckoutComp