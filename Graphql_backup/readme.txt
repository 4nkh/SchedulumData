BACK TABLE GRAPHQL DYNAMODB AWS -> 

aws dynamodb scan \
  --table-name AgendaShift-vchnedpkxrd6jmrsdikyk6vebi-NONE \
  --profile 4nkhSchedulum > sandbox-AgendaShiftdata.json

restore:

aws dynamodb batch-write-item --request-items file://sandbox-AgendaUserdata.json  --profile 4nkhSchedulumDev

// aws dynamodb batch-write-item --request-items file://sandbox-AgendaShift-batch.json --region VOTRE_REGION_AWS
// aws dynamodb batch-write-item --request-items file://sandbox-AgendaShift-batch.json --region us-east-1


react-native-calendar:
	add: (src/expandableCalendars/index.js)
		const renderCalendarList = () => {
			return (<CalendarList testID={`${testID}.calendarList`} isOpen={isOpen} horizontal={horizontal} firstDay={firstDay} calendarStyle={calendarStyle} onHeaderLayout={onHeaderLayout} {...others} current={date} theme={themeObject} ref={calendarList} onDayPress={_onDayPress} onVisibleMonthsChange={onVisibleMonthsChange} pagingEnabled scrollEnabled={isOpen} hideArrows={shouldHideArrows} onPressArrowLeft={_onPressArrowLeft} onPressArrowRight={_onPressArrowRight} hideExtraDays={!horizontal && isOpen} renderArrow={_renderArrow} staticHeader numberOfDays={numberOfDays} headerStyle={_headerStyle} timelineLeftInset={timelineLeftInset} context={_context}/>);
		};
	add isOpen as props: (src/calendar-list/index.js)
		return (<View style={style.current.flatListContainer} testID={testID}>
			<View style={isOpen ? {opacity: 1} : {opacity: 0}}>
				<FlatList ref={list} windowSize={shouldFixRTL ? pastScrollRange + futureScrollRange + 1 : undefined} style={listStyle} showsVerticalScrollIndicator={showScrollIndicator} showsHorizontalScrollIndicator={showScrollIndicator} data={items} renderItem={renderItem} getItemLayout={getItemLayout} initialNumToRender={range.current} initialScrollIndex={initialDateIndex} viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current} testID={`${testID}.list`} onLayout={onLayout} removeClippedSubviews={removeClippedSubviews} pagingEnabled={pagingEnabled} scrollEnabled={scrollEnabled} scrollsToTop={scrollsToTop} horizontal={horizontal} keyboardShouldPersistTaps={keyboardShouldPersistTaps} keyExtractor={keyExtractor} onEndReachedThreshold={onEndReachedThreshold} onEndReached={onEndReached} nestedScrollEnabled={nestedScrollEnabled} onMomentumScrollBegin={onMomentumScrollBegin} onMomentumScrollEnd={onMomentumScrollEnd} onScrollBeginDrag={onScrollBeginDrag} onScrollEndDrag={onScrollEndDrag} contentContainerStyle={contentContainerStyle}/>
			</View>
			{renderStaticHeader()}
		</View>);

		monthViewOpacity in ../src/calendars/styles.js
		and in the types.d.ts for the interface


%%%%%
maybe put back the let instead of callback for refetch in edit profile