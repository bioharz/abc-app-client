import {Component, Prop, State} from '@stencil/core';
import {MatchResults} from '@stencil/router';

@Component({
    tag: 'abc-test',
    styleUrl: 'abc-test.css'
})
export class ABCTest {

    @Prop()
    match: MatchResults;

    @State()
    test;

    componentWillLoad() {
        let code = this.match.params.code;


        console.log('The component will update');
        console.log(this.match.params.code);

        fetch('http://localhost:8081/tests/' + code)
            .then(response => {
                return response.json().then(json => {
                    console.log(json);
                    this.test = json;
                })
            })
    }


    render() {

        if (this.test) {
            return (
                <div>
                    <h1>Title: {this.test.title}</h1>
                    <h2>Person: {this.test.person}</h2>

                </div>
            );
        } else {
            return (<p>Loading Test</p>);
        }
    }
}
