import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardAction from '@material-ui/core/CardActions';
import { Button, Typography } from '@material-ui/core';

export default class SocialCard extends React.Component {
    render() {
        return (
            <Card>
                <CardContent>
                    <Typography variant="h4">
                        Joe Smith
                    </Typography>
                    <Typography variant="subtitle2">
                        UI developer
                    </Typography>
                </CardContent>
                <CardAction>
                    <Button>Go to their Github Profile</Button>
                </CardAction>
            </Card>);
    }
}
