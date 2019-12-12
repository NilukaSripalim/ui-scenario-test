



describe('SAMPLE TEST ',() =>{
    it('It execute sample test case',()=>{
        browser.driver.get('https://localhost:9443/user-portal');
        browser.driver.getTitle().then(function (title) {
            console.log('Title--->',title);
        });
    });
} );
