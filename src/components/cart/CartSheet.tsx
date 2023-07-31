import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { Badge } from "@/components/ui/badge";

const CartSheet = async () => {

    const cartLineItems = [1]

    const itemsCount = cartLineItems.length;

  return (
    <Sheet>
        <SheetTrigger>
            <Button
                aria-label="Open cart"
                variant="outline"
                size="icon"
                className="relative"
            >
                {itemsCount > 0 && (
                    <Badge 
                        variant="secondary"
                        className="absolute -top-2 -right-2 w-6 h-5 rounded-full p-2"
                    >
                        {itemsCount}  
                    </Badge>
                )}
                <Icons.cart className="w-4 h-4" aria-hidden="true"/>
            </Button>
        </SheetTrigger>
        <SheetContent>
            <SheetHeader>
                <SheetTitle>Cart{itemsCount > 0 && `(${itemsCount})`}</SheetTitle>
            </SheetHeader>
        </SheetContent>
    </Sheet>
  )
}

export default CartSheet