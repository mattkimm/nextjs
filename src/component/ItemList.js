import React from "react";
import { Grid, Image } from "semantic-ui-react";

function ItemList({ list }) {
  return (
    <div>
      <Grid columns={3}>
        <Grid.Row>
          {list.map((item) => {
            return (
              <Grid.Column key={item.id}>
                <Image src={item.image_link} alt={item.name} />
              </Grid.Column>
            );
          })}
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default ItemList;
