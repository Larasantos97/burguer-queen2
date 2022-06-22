import React from 'react';
import styles from './components.module.css'

export default function button(props) {
    return (
        <button
          value={props.value}
          title={props.title}
          className={(styles.button, props.className)}
          onclick={props.onclick}
          id={props.id}
          >
          {props.title} {props.value}
          </button>
    );
}

/*const styles = StyleSheet.create({
    button: {
        backgroundColor: '##F29727'

    }
});*/