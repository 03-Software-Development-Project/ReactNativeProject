import React from 'react'
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native'
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons'
import img from '../../assets/img'
import styles from './styles'

function SubjectItem(props) {
  const {key, subjectName, subjectDesc, onPress} = {...props}
  return (
    <TouchableOpacity
      key={key}
      onPress={onPress}
      style={styles.lowerBodySubjectItem}>
      <Ionicons
        style={styles.lowerBodySubjectItemIcon}
        name="library-outline"
      />
      <View style={styles.lowerBodySubjectItemTextView}>
        <Text
          numberOfLines={1}
          style={styles.lowerBodySubjectName}>
          {subjectName}
        </Text>
        <Text
          numberOfLines={2}
          style={styles.lowerBodySubjectDesc}>
          {subjectDesc}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

function ClassDetailScreen({navigation}) {
  const insets = useSafeAreaInsets()
  const bodyBottomInset = insets.bottom
  const subjects = [
    {id: 1, name: 'Môn 2', description: 'Mô tả', onPress: () => {}},
    {id: 2, name: 'Môn 2', description: 'Mô tả', onPress: () => {}},
    {id: 3, name: 'Môn 3', description: 'Mô tả', onPress: () => {}},
    {id: 4, name: 'Môn 2', description: 'Mô tả', onPress: () => {}},
    {id: 5, name: 'Môn 2', description: 'Mô tả', onPress: () => {}},
    {id: 6, name: 'Môn 3', description: 'Mô tả', onPress: () => {}},
    {id: 7, name: 'Môn 2', description: 'Mô tả', onPress: () => {}},
    {id: 8, name: 'Môn 2', description: 'Mô tả', onPress: () => {}},
    {id: 9, name: 'Môn 3', description: 'Mô tả', onPress: () => {}},
  ]
  return (
    <View style={styles.container}>
      <SafeAreaView
        edges={['left, right']}
        style={styles.header}>
        <Image
          style={styles.headerBackgroundImage}
          source={img.background}
        />
        <SafeAreaView
          edges={['top']}
          style={styles.headerContent}>
          <TouchableOpacity
            style={styles.headerContentBackButton}
            onPress={() => {
              navigation.goBack()
            }}>
            <Ionicons
              name="chevron-back"
              size={25}
              color="white"
            />
          </TouchableOpacity>
        </SafeAreaView>
      </SafeAreaView>
      <SafeAreaView
        edges={['left', 'right']}
        style={[
          styles.body,
          {
            bottom: bodyBottomInset,
          },
        ]}>
        <View style={styles.upperBody}>
          <Text style={styles.upperBodyTitle}>
            Lớp đào tạo môn học tự nhiên
          </Text>
          <Text style={styles.upperBodyText}>Mã lớp: LA001</Text>
        </View>
        <View style={styles.middleBody}>
          <Text style={styles.middleBodyTitle}>Mô tả lớp học</Text>
          <Text style={styles.middleBodyText}>
            You must complete this test in one session, make sure your Internet
            is reliable. One mark awarded for a correct answer. No negative
            marking will be there for wrong answer. More you give the correct
            answer more chance to win the badge.
          </Text>
        </View>
        <View style={styles.lowerBody}>
          <Text style={styles.lowerBodyTitle}>Các môn có trong lớp học</Text>
          <ScrollView style={styles.lowerBodySrollViewContainer}>
            <View style={styles.lowerBodySrollViewContent}>
              {subjects.map((subject) => (
                <SubjectItem
                  key={subject.id}
                  subjectName={subject.name}
                  subjectDesc={subject.description}
                  onPress={subject.onPress}
                />
              ))}
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  )
}
export default ClassDetailScreen
