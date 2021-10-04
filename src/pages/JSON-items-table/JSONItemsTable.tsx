import { withStyles } from '@mui/styles';
import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { EditComponent } from '../../components/edit-component/edit-component';
import { PageContent } from '../../components/page-content/page-content';
import { JsonStore } from '../../stores/JSONStore';
import { StyledComponentProps } from '../../types/styled';

import { Classes, styles } from './styles';

const JSONItemsTable = inject("jsonStore")(observer(({ jsonStore, classes }: InjectedProps): JSX.Element => {
  return (
    <div className={classes.container}>
        <PageContent>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            { jsonStore && jsonStore.JSONList && jsonStore.JSONList.map((jsonListItem: any, index: number) => (
              <div style={{ display: 'flex' }}>
                { jsonListItem && jsonListItem.keysOfObject && jsonListItem.keysOfObject.map((objectItem: string) => (
                  <div>
                    <div style={{ display: 'flex', margin: '10px', width: 'auto' }}>
                      <div><p>{objectItem}:&nbsp;</p></div> 
                      <div style={{ width: 'max-content' }}><p>{JSON.stringify(jsonListItem[objectItem])}</p></div>
                    </div>
                    <div style={{ margin: '10px', width: '100%', padding: '10px' }}>
                      <EditComponent keyName={objectItem} objectForEdit={jsonListItem} value={jsonListItem[objectItem]} index={index} />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </PageContent>
      </div>
  )
}))

interface TypedTableProps {
  jsonStore: JsonStore;
}

type InjectedProps = TypedTableProps & StyledComponentProps<Classes>;

const WrappedJSONItemsTable = withStyles(styles)((JSONItemsTable));

export { WrappedJSONItemsTable as JSONItemsTable };
