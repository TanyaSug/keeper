import {createContext, useEffect, useState} from 'react';

const removeCardItem = (cardItems, productToRemove) => {
    const existingCardItem = cardItems.find((cardItem) => cardItem.id === productToRemove.id);

    if(existingCardItem.quantity === 1) {
       return cardItems.filter(cardItem => cardItem.id !== productToRemove.id)
    }
    return cardItems.map((cardItem) => cardItem.id === productToRemove.id
        ? {...cardItem, quantity: cardItem.quantity - 1}
        : cardItem
    );
};
const addCardItem = (cardItems, productToAdd) => {
    const existingCardItem = cardItems.find((cardItem) => cardItem.id === productToAdd.id);

    if (existingCardItem) {
        return cardItems.map((cardItem) => cardItem.id === productToAdd.id
            ? {...cardItem, quantity: cardItem.quantity + 1}
            : cardItem
        );
    }

    return [...cardItems, {...productToAdd, quantity: 1 }];

};

const clearCardItem = (cardItems, productToClear) => {

    return cardItems.filter(cardItem => cardItem.id !== productToClear.id)
};

export const CardContext = createContext({
    isCardOpen: false,
    setIsCardOpen: () => {},
    cardItems: [],
    addItemToCard: () => {},
    removeItemFromCard: () => {},
    clearItemFromCard: () => {},
    cardCount: 0,
    cardTotal: 0,
});

export const CardProvider = ({children}) => {
    const [isCardOpen, setIsCardOpen] = useState(false);
    const [cardItems, setCardItems] = useState([]);
    const [cardCount, setCardCount] = useState(0);
    const [cardTotal, setCardTotal] = useState(0);

    useEffect(() => {
        const newCardCount = cardItems.reduce((total, cardItem) => total + cardItem.quantity, 0);
        setCardCount(newCardCount);
    }, [cardItems]);

    useEffect(() => {
        const newCardTotal = cardItems.reduce(
            (total, cardItem) => total + cardItem.quantity * cardItem.price,
            0
        );
        setCardTotal(newCardTotal);
    }, [cardItems]);

    const addItemToCard = (productToAdd) => {
        setCardItems(addCardItem(cardItems, productToAdd));
    };

    const removeItemFromCard = (productToRemove) => {
        setCardItems(removeCardItem(cardItems, productToRemove));
    };

    const clearItemFromCard = (productToClear) => {
        setCardItems(clearCardItem(cardItems, productToClear));
    };


    const value = { isCardOpen, setIsCardOpen, addItemToCard, cardItems, cardCount, cardTotal, clearItemFromCard, removeItemFromCard };

    return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};