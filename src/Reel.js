import React, { useEffect, useState } from 'react';

// Sample items for the reel
const items = [
    { id: 1, label: '🍎', value: 'apple' },
    { id: 2, label: '🍌', value: 'banana' },
    { id: 3, label: '🍒', value: 'cherry' },
    { id: 4, label: '🍉', value: 'watermelon' },
    { id: 5, label: '🍇', value: 'grape' },
];

const Reel = ({ spinning }) => {
    const [currentItems, setCurrentItems] = useState(items);

    // Function to shuffle items
    const shuffleItems = () => {
        // Shuffle logic (simple random selection)
        const shuffled = items.sort(() => Math.random() - 0.5).slice(0, 3);
        setCurrentItems(shuffled);
    };

    useEffect(() => {
        if (spinning) {
            shuffleItems();
            // You can add more animation logic or effects here if needed
        }
    }, [spinning]);

    return (
        <div style={styles.reelContainer}>
            {currentItems.map((item) => (
                <div key={item.id} style={styles.reelItem}>
                    {item.label}
                </div>
            ))}
        </div>
    );
};

const styles = {
    reelContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '2px solid #000',
        borderRadius: '10px',
        width: '200px',
        height: '100px',
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: '#f0f0f0',
    },
    reelItem: {
        fontSize: '30px',
        flex: '1 0 33%',
        textAlign: 'center',
        transition: 'transform 0.5s ease',
    },
};

export default Reel;
