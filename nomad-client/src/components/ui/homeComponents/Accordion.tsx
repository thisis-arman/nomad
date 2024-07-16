import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../accordion';

const AccordionFAQ = () => {
    return (
        <div className='max-w-screen-md mx-auto'>
            <div>
                <h2 className='text-2xl font-bold text-center py-8'>Frequently Asking Questions</h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>Cash on delivery is available ?</AccordionTrigger>
                    <AccordionContent>
                        Yes.you will get the offer on some of our products
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>How to place order?</AccordionTrigger>
                    <AccordionContent>
                       Choose your product - Add to Cart - proceed to payment - done
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>How to place order?</AccordionTrigger>
                    <AccordionContent>
                        Choose your product - Add to Cart - proceed to payment - done
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

        </div>
    );
};

export default AccordionFAQ;